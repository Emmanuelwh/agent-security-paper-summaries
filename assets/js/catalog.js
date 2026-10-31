(function () {
  'use strict';

  var source = document.getElementById('catalog-source');
  if (!source) return;

  var site = {
    repo: 'https://github.com/Emmanuelwh/agent-security-paper-summaries',
    issues: 'https://github.com/Emmanuelwh/agent-security-paper-summaries/issues',
    pulls: 'https://github.com/Emmanuelwh/agent-security-paper-summaries/pulls',
    homepage: 'https://emmanuelwh.github.io/'
  };

  try {
    buildCatalog();
  } catch (error) {
    source.classList.add('raw-fallback');
    if (window.console) console.error('Agent security catalog:', error);
  }

  function buildCatalog() {
    var sections = splitSections(source);
    var lead = sections[0];
    var allPapers = findSection(sections, 'all papers');
    if (!allPapers) throw new Error('The README is missing an All Papers section.');

    var topicSection = findSection(sections, 'papers by topic');
    var preprintSection = findSection(sections, 'preprints');
    var contributionSection = findSection(sections, 'contributing');
    var licenseSection = findSection(sections, 'license');

    var yearGroups = parseGroups(allPapers.nodes, 'year');
    var topicGroups = topicSection ? parseGroups(topicSection.nodes, 'topic') : [];
    var preprintGroups = preprintSection ? parsePreprints(preprintSection.nodes) : [];

    var state = {
      query: '',
      venues: {},
      venueCounts: {},
      entries: [],
      currentView: 'year'
    };

    var page = element('div', 'catalog-app');
    page.appendChild(buildHero(lead, yearGroups, preprintGroups));

    var shell = element('div', 'catalog-shell');
    var filters = buildFilters();
    var main = element('main', 'catalog-main');
    main.id = 'paper-catalog';
    shell.appendChild(filters);
    shell.appendChild(main);
    page.appendChild(shell);

    var views = [
      { id: 'year', label: 'By year', groups: yearGroups },
      { id: 'topic', label: 'By topic', groups: topicGroups },
      { id: 'preprint', label: 'Preprints', groups: preprintGroups }
    ].filter(function (view) { return view.groups.length; });

    var toolbar = element('div', 'catalog-toolbar');
    var tabs = element('div', 'view-tabs');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Paper views');
    var tally = element('p', 'paper-tally');
    tally.setAttribute('aria-live', 'polite');
    toolbar.appendChild(tabs);
    toolbar.appendChild(tally);
    main.appendChild(toolbar);

    views.forEach(function (view, viewIndex) {
      var tab = element('button', 'view-tab', view.label);
      tab.type = 'button';
      tab.id = 'tab-' + view.id;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(viewIndex === 0));
      tab.setAttribute('aria-controls', 'view-' + view.id);
      tab.setAttribute('tabindex', viewIndex === 0 ? '0' : '-1');
      tabs.appendChild(tab);

      view.node = element('section', 'paper-view');
      view.node.id = 'view-' + view.id;
      view.node.setAttribute('role', 'tabpanel');
      view.node.setAttribute('aria-labelledby', tab.id);
      view.node.hidden = viewIndex !== 0;
      view.node.appendChild(buildColumnHead());
      view.groups.forEach(function (group) {
        view.node.appendChild(renderGroup(group, view.id, state));
      });
      main.appendChild(view.node);

      tab.addEventListener('click', function () {
        state.currentView = view.id;
        views.forEach(function (candidate) {
          var selected = candidate.id === view.id;
          candidate.node.hidden = !selected;
          var candidateTab = document.getElementById('tab-' + candidate.id);
          candidateTab.setAttribute('aria-selected', String(selected));
          candidateTab.setAttribute('tabindex', selected ? '0' : '-1');
        });
        applyFilters();
      });

      tab.addEventListener('keydown', function (event) {
        var direction = event.key === 'ArrowRight' ? 1 :
          event.key === 'ArrowLeft' ? -1 : 0;
        if (!direction) return;
        event.preventDefault();
        var next = views[(viewIndex + direction + views.length) % views.length];
        var nextTab = document.getElementById('tab-' + next.id);
        nextTab.click();
        nextTab.focus();
      });
    });

    var empty = element('div', 'empty-state');
    empty.hidden = true;
    empty.appendChild(element('p', '', 'No papers match the current filters.'));
    var clearButton = element('button', '', 'Clear filters');
    clearButton.type = 'button';
    empty.appendChild(clearButton);
    main.appendChild(empty);

    page.appendChild(buildFooter(contributionSection, licenseSection));

    source.textContent = '';
    source.className = 'catalog-source catalog-ready';
    source.appendChild(page);

    populateVenueFilters(filters, state);
    bindInteractions(filters, state, clearButton, applyFilters);
    bindYearMap(page, views);
    bindFilterPanel(filters);
    bindTheme(filters);
    applyFilters();

    function applyFilters() {
      var activeView = views.filter(function (view) {
        return view.id === state.currentView;
      })[0];
      var query = state.query.trim().toLowerCase();
      var selectedVenues = Object.keys(state.venues);
      var visible = 0;
      var total = 0;

      state.entries.forEach(function (entry) {
        if (entry.view !== activeView.id) return;
        total += 1;
        var queryMatch = !query || entry.haystack.indexOf(query) !== -1;
        var venueMatch = !selectedVenues.length || !!state.venues[entry.paper.venue];
        entry.node.hidden = !(queryMatch && venueMatch);
        if (!entry.node.hidden) visible += 1;
      });

      Array.prototype.forEach.call(
        activeView.node.querySelectorAll('.paper-subgroup'),
        function (subgroup) {
          subgroup.hidden = !subgroup.querySelector('.paper-row:not([hidden])');
        }
      );
      Array.prototype.forEach.call(
        activeView.node.querySelectorAll('.paper-group'),
        function (group) {
          group.hidden = !group.querySelector('.paper-subgroup:not([hidden])');
          var count = group.querySelector('.group-count');
          if (count) {
            var shown = group.querySelectorAll('.paper-row:not([hidden])').length;
            count.textContent = shown + (shown === 1 ? ' paper' : ' papers');
          }
        }
      );

      tally.innerHTML = '<strong>' + visible + '</strong>' +
        (visible === total ? ' papers' : ' of ' + total + ' papers');
      empty.hidden = visible !== 0;
      filters.querySelector('.filter-reset').hidden =
        !query && selectedVenues.length === 0;
    }
  }

  function splitSections(root) {
    var sections = [{ title: null, nodes: [] }];
    Array.prototype.forEach.call(root.children, function (node) {
      if (node.tagName === 'H2') {
        sections.push({ title: cleanText(node), nodes: [] });
      } else if (node.tagName !== 'HR') {
        sections[sections.length - 1].nodes.push(node);
      }
    });
    return sections;
  }

  function findSection(sections, name) {
    name = name.toLowerCase();
    return sections.filter(function (section) {
      return section.title && section.title.toLowerCase() === name;
    })[0] || null;
  }

  function parseGroups(nodes, mode) {
    var groups = [];
    var group = null;
    var subgroup = null;

    nodes.forEach(function (node) {
      if (node.tagName === 'H3') {
        group = { label: cleanText(node), note: '', subgroups: [] };
        groups.push(group);
        subgroup = null;
      } else if (node.tagName === 'H4') {
        if (!group) return;
        subgroup = { label: cleanText(node), papers: [] };
        group.subgroups.push(subgroup);
      } else if (node.tagName === 'P' && group && !group.subgroups.length) {
        group.note = cleanText(node);
      } else if ((node.tagName === 'UL' || node.tagName === 'OL') && group) {
        if (!subgroup) {
          subgroup = { label: '', papers: [] };
          group.subgroups.push(subgroup);
        }
        Array.prototype.forEach.call(node.children, function (item) {
          if (item.tagName !== 'LI') return;
          var year = mode === 'year' && /^\d{4}$/.test(group.label) ? group.label : '';
          var venue = mode === 'year' ? subgroup.label : '';
          subgroup.papers.push(parsePaper(item, venue, year));
        });
      }
    });

    return groups.filter(function (candidate) {
      return candidate.subgroups.some(function (sub) { return sub.papers.length; });
    });
  }

  function parsePreprints(nodes) {
    var papers = [];
    nodes.forEach(function (node) {
      if (node.tagName !== 'UL' && node.tagName !== 'OL') return;
      Array.prototype.forEach.call(node.children, function (item) {
        if (item.tagName === 'LI') papers.push(parsePaper(item, 'Preprint', ''));
      });
    });
    return papers.length ? [{
      label: 'Preprints',
      note: 'Recent work without a venue assignment in this collection.',
      subgroups: [{ label: '', papers: papers }]
    }] : [];
  }

  function parsePaper(item, venueHint, yearHint) {
    var primary = item.querySelector('a[href]');
    var title = primary ? cleanText(primary) : cleanText(item);
    var raw = cleanText(item);
    var venue = venueHint || '';
    var year = yearHint || '';
    var meta = /\(([^()]*)\)\s*$/.exec(raw);

    if (meta) {
      var parsed = /^(.+?)\s+['’](\d{2})$/.exec(meta[1].trim());
      if (parsed) {
        venue = venue || parsed[1].trim();
        year = year || '20' + parsed[2];
      }
    }

    return {
      title: title,
      href: primary ? primary.getAttribute('href') : '',
      venue: normaliseVenue(venue),
      year: year,
      source: sourceLabel(primary ? primary.getAttribute('href') : '')
    };
  }

  function buildHero(lead, yearGroups, preprintGroups) {
    var header = element('header', 'site-hero');
    var uniquePapers = [];
    yearGroups.forEach(function (group) {
      group.subgroups.forEach(function (subgroup) {
        subgroup.papers.forEach(function (paper) { uniquePapers.push(paper); });
      });
    });
    var venueSet = {};
    uniquePapers.forEach(function (paper) { if (paper.venue) venueSet[paper.venue] = true; });

    var kicker = element('p', 'hero-kicker', 'Living bibliography / Agent security');
    header.appendChild(kicker);

    var title = element('h1', 'hero-title');
    title.appendChild(element('span', '', 'Agent Security'));
    title.appendChild(element('span', 'hero-title-secondary', 'Research Papers'));
    header.appendChild(title);

    var quote = lead.nodes.filter(function (node) {
      return node.tagName === 'BLOCKQUOTE';
    })[0];
    header.appendChild(element(
      'p',
      'hero-lede',
      quote ? cleanText(quote) :
        'A curated bibliography of research on the security and privacy of LLM-based agents.'
    ));

    var meta = element('div', 'hero-meta');
    meta.appendChild(stat(uniquePapers.length, 'published papers'));
    meta.appendChild(stat(preprintGroups.length ? preprintGroups[0].subgroups[0].papers.length : 0, 'preprints'));
    meta.appendChild(stat(Object.keys(venueSet).length, 'venues'));
    meta.appendChild(stat(yearGroups.length, 'years'));
    header.appendChild(meta);

    var links = element('div', 'hero-links');
    links.appendChild(anchor(site.repo, 'GitHub repository'));
    links.appendChild(anchor(site.pulls, 'Contribute a paper'));
    links.appendChild(anchor(site.homepage, 'Maintainer homepage'));
    header.appendChild(links);

    header.appendChild(buildYearMap(yearGroups));
    return header;
  }

  function buildYearMap(groups) {
    var wrap = element('nav', 'year-map');
    wrap.setAttribute('aria-label', 'Paper counts by year');
    var heading = element('div', 'year-map-heading');
    heading.appendChild(element('span', '', 'Published papers by year'));
    var counts = groups.map(function (group) {
      return group.subgroups.reduce(function (total, subgroup) {
        return total + subgroup.papers.length;
      }, 0);
    });
    var peak = Math.max.apply(null, counts.concat([1]));
    heading.appendChild(element('span', '', 'peak ' + peak));
    wrap.appendChild(heading);

    groups.forEach(function (group, index) {
      var row = element('button', 'year-map-row');
      row.type = 'button';
      row.dataset.year = group.label;
      row.appendChild(element('span', 'year-map-label', group.label));
      var track = element('span', 'year-map-track');
      var fill = element('span', 'year-map-fill');
      fill.style.width = Math.max(4, Math.round((counts[index] / peak) * 100)) + '%';
      track.appendChild(fill);
      row.appendChild(track);
      row.appendChild(element('span', 'year-map-count', String(counts[index])));
      wrap.appendChild(row);
    });
    return wrap;
  }

  function buildFilters() {
    var aside = element('aside', 'filters');
    var details = element('details', 'filter-panel');
    details.open = window.matchMedia('(min-width: 960px)').matches;
    details.appendChild(element('summary', '', 'Browse and filter'));
    var body = element('div', 'filter-body');

    var search = element('label', 'search-field');
    search.appendChild(element('span', '', 'Search'));
    var input = element('input');
    input.type = 'search';
    input.id = 'paper-search';
    input.placeholder = 'Title, venue, topic...';
    input.autocomplete = 'off';
    search.appendChild(input);
    body.appendChild(search);

    var venueHeader = element('div', 'filter-heading');
    venueHeader.appendChild(element('h2', '', 'Venue'));
    var reset = element('button', 'filter-reset', 'Reset');
    reset.type = 'button';
    reset.hidden = true;
    venueHeader.appendChild(reset);
    body.appendChild(venueHeader);
    body.appendChild(element('div', 'venue-chips'));

    var links = element('div', 'filter-links');
    links.appendChild(anchor(site.issues, 'Suggest a correction'));
    links.appendChild(anchor(site.pulls, 'Add a paper'));
    links.appendChild(anchor(site.repo, 'View source'));
    var theme = element('button', 'theme-toggle', 'Switch theme');
    theme.type = 'button';
    links.appendChild(theme);
    body.appendChild(links);

    details.appendChild(body);
    aside.appendChild(details);
    return aside;
  }

  function populateVenueFilters(filters, state) {
    var yearEntries = state.entries.filter(function (entry) {
      return entry.view === 'year' && entry.paper.venue;
    });
    yearEntries.forEach(function (entry) {
      state.venueCounts[entry.paper.venue] =
        (state.venueCounts[entry.paper.venue] || 0) + 1;
    });
    var host = filters.querySelector('.venue-chips');
    Object.keys(state.venueCounts).sort(function (a, b) {
      return state.venueCounts[b] - state.venueCounts[a] || a.localeCompare(b);
    }).forEach(function (venue) {
      var chip = element('button', 'venue-chip');
      chip.type = 'button';
      chip.dataset.venue = venue;
      chip.setAttribute('aria-pressed', 'false');
      chip.appendChild(element('span', '', venue));
      chip.appendChild(element('span', 'chip-count', String(state.venueCounts[venue])));
      host.appendChild(chip);
    });
  }

  function bindInteractions(filters, state, clearButton, applyFilters) {
    var input = filters.querySelector('#paper-search');
    var chips = filters.querySelector('.venue-chips');
    var reset = filters.querySelector('.filter-reset');

    input.addEventListener('input', function () {
      state.query = input.value;
      applyFilters();
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') resetAll();
    });
    chips.addEventListener('click', function (event) {
      var chip = event.target.closest('.venue-chip');
      if (!chip) return;
      var venue = chip.dataset.venue;
      var active = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', String(!active));
      if (active) delete state.venues[venue];
      else state.venues[venue] = true;
      applyFilters();
    });
    reset.addEventListener('click', resetAll);
    clearButton.addEventListener('click', resetAll);
    document.addEventListener('keydown', function (event) {
      if (event.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        event.preventDefault();
        input.focus();
      }
    });

    function resetAll() {
      input.value = '';
      state.query = '';
      state.venues = {};
      Array.prototype.forEach.call(chips.children, function (chip) {
        chip.setAttribute('aria-pressed', 'false');
      });
      applyFilters();
    }
  }

  function bindYearMap(page, views) {
    Array.prototype.forEach.call(page.querySelectorAll('.year-map-row'), function (row) {
      row.addEventListener('click', function () {
        document.getElementById('tab-year').click();
        var target = document.getElementById('year-' + slug(row.dataset.year));
        if (target) {
          var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        }
      });
    });
  }

  function bindFilterPanel(filters) {
    var panel = filters.querySelector('.filter-panel');
    var desktop = window.matchMedia('(min-width: 960px)');
    var sync = function (event) {
      if (event.matches) panel.open = true;
    };
    if (desktop.addEventListener) desktop.addEventListener('change', sync);
    else desktop.addListener(sync);
  }

  function bindTheme(filters) {
    var button = filters.querySelector('.theme-toggle');
    var sync = function () {
      var explicit = document.documentElement.dataset.theme;
      var dark = explicit === 'dark' ||
        (!explicit && window.matchMedia('(prefers-color-scheme: dark)').matches);
      button.textContent = dark ? 'Use light theme' : 'Use dark theme';
    };
    sync();
    button.addEventListener('click', function () {
      var current = document.documentElement.dataset.theme;
      var dark = current === 'dark' ||
        (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('agent-security-theme', next); } catch (error) {}
      sync();
    });
  }

  function buildColumnHead() {
    var head = element('div', 'paper-columns');
    head.setAttribute('aria-hidden', 'true');
    head.appendChild(element('span', '', '#'));
    head.appendChild(element('span', '', 'Paper'));
    head.appendChild(element('span', '', 'Source'));
    return head;
  }

  function renderGroup(group, viewId, state) {
    var section = element('section', 'paper-group');
    section.id = (viewId === 'year' ? 'year-' : viewId + '-') + slug(group.label);
    var header = element('div', 'group-header');
    header.appendChild(element('h3', '', group.label));
    header.appendChild(element('span', 'group-count'));
    section.appendChild(header);
    if (group.note) section.appendChild(element('p', 'group-note', group.note));

    var sequence = 0;
    group.subgroups.forEach(function (subgroup) {
      var sub = element('section', 'paper-subgroup');
      if (subgroup.label) sub.appendChild(element('h4', '', subgroup.label));
      var list = element('ol', 'paper-list');
      subgroup.papers.forEach(function (paper) {
        sequence += 1;
        var row = renderPaper(paper, sequence);
        list.appendChild(row);
        state.entries.push({
          view: viewId,
          paper: paper,
          node: row,
          haystack: [
            paper.title,
            paper.venue,
            paper.year,
            subgroup.label,
            group.label
          ].join(' ').toLowerCase()
        });
      });
      sub.appendChild(list);
      section.appendChild(sub);
    });
    return section;
  }

  function renderPaper(paper, index) {
    var row = element('li', 'paper-row');
    row.appendChild(element('span', 'paper-index', String(index).padStart(2, '0')));
    var body = element('span', 'paper-body');
    var title = element(paper.href ? 'a' : 'span', 'paper-title', paper.title);
    if (paper.href) {
      title.href = paper.href;
      title.rel = 'noopener';
    }
    body.appendChild(title);
    var metadata = element('span', 'paper-metadata');
    if (paper.venue) metadata.appendChild(element('span', 'paper-tag venue', paper.venue));
    if (paper.year) metadata.appendChild(element('span', 'paper-tag year', paper.year));
    body.appendChild(metadata);
    row.appendChild(body);
    if (paper.href) {
      var link = anchor(paper.href, paper.source + ' ↗');
      link.className = 'paper-source';
      link.rel = 'noopener';
      row.appendChild(link);
    } else {
      row.appendChild(element('span', 'paper-source missing', 'No link'));
    }
    return row;
  }

  function buildFooter(contribution, license) {
    var footer = element('footer', 'site-footer');
    [
      { title: 'Contributing', section: contribution },
      { title: 'License', section: license }
    ].forEach(function (item) {
      if (!item.section) return;
      var block = element('section', '');
      block.appendChild(element('h2', '', item.title));
      item.section.nodes.forEach(function (node) {
        block.appendChild(node.cloneNode(true));
      });
      footer.appendChild(block);
    });
    return footer;
  }

  function stat(value, label) {
    var item = element('div', 'hero-stat');
    item.appendChild(element('strong', '', String(value)));
    item.appendChild(element('span', '', label));
    return item;
  }

  function anchor(href, label) {
    var link = element('a', '', label);
    link.href = href;
    link.rel = 'noopener';
    return link;
  }

  function sourceLabel(href) {
    if (!href) return 'link';
    if (/aclanthology\.org/.test(href)) return 'ACL';
    if (/usenix\.org/.test(href)) return 'USENIX';
    if (/ieeexplore\.ieee\.org/.test(href)) return 'IEEE';
    if (/proceedings\.mlr\.press/.test(href)) return 'PMLR';
    if (/nips\.cc|neurips\.cc/.test(href)) return 'NeurIPS';
    if (/proceedings\.iclr\.cc/.test(href)) return 'ICLR';
    if (/openreview\.net/.test(href)) return 'OpenReview';
    if (/doi\.org/.test(href)) return 'DOI';
    if (/arxiv\.org/.test(href)) return 'arXiv';
    return 'paper';
  }

  function normaliseVenue(venue) {
    return String(venue || '')
      .replace(/\s+Findings$/i, '')
      .replace(/\s*['’]\d{2}\s*$/, '')
      .trim();
  }

  function slug(value) {
    return String(value).toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function cleanText(node) {
    return (node.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
})();
