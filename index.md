---
layout: default
title: Agent Security Papers
---

# Agent Security Papers

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-ready-0b7a75)](https://pages.github.com/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-155263)](#contributing)
[![Last Updated](https://img.shields.io/badge/last%20updated-2026--08--05-57606a)](#)

This page tracks research papers on the security and privacy of LLM-based agents. The focus is on agentic systems that use tools, retrieve untrusted content, interact with external environments, persist memory, execute multi-step tasks, or act on behalf of users.

The collection is meant to help researchers follow recent progress, compare threat models, and identify open problems. Contributions, corrections, missing papers, and discussion are very welcome.

<div class="note" markdown="1">
Scope: prompt injection, indirect prompt injection, tool abuse, tool selection hijacking, data leakage, privacy leakage, agent backdoors, persistent control, harmful task execution, and defenses for tool-using or environment-facing LLM agents.
</div>

## Contents

- [Reading Map](#reading-map)
- [Papers by Year](#papers-by-year)
- [Papers by Topic](#papers-by-topic)
- [Contributing](#contributing)

## Reading Map

| Area | What to Look For | Representative Papers |
| --- | --- | --- |
| Indirect prompt injection | Untrusted external content changes an agent's actions. | [BIPIA](https://arxiv.org/abs/2312.14197), [InjecAgent](https://arxiv.org/abs/2403.02691), [AgentDojo](https://arxiv.org/abs/2406.13352), [ARGUS](https://arxiv.org/abs/2605.03378) |
| Tool and action security | Attacks against tool invocation, tool selection, or external action execution. | [ToolEmu](https://arxiv.org/abs/2309.15817), [ToolHijacker](https://arxiv.org/abs/2504.19793), [Tool Result Parsing](https://arxiv.org/abs/2601.04795) |
| Privacy and data leakage | Sensitive data exposure during adversarial or benign agent use. | [PrivacyLens](https://arxiv.org/abs/2409.00138), [Simple Prompt Injection Attacks Can Leak Personal Data](https://arxiv.org/abs/2506.01055), [Data Leakage Risks in Tool-Using LLM Agents](https://arxiv.org/abs/2606.17114) |
| Persistent and stateful attacks | Agent memory, files, workspace state, or long-running context becomes an attack channel. | [Stateful Agent Backdoor](https://arxiv.org/abs/2605.06158), [ClawTrojan/DASGuard](https://arxiv.org/abs/2605.31042) |
| Defenses and secure design | Separating trusted instructions from untrusted data, provenance auditing, capabilities, and alignment. | [StruQ](https://arxiv.org/abs/2402.06363), [SecAlign](https://arxiv.org/abs/2410.05451), [CaMeL](https://arxiv.org/abs/2503.18813), [IntentGuard](https://arxiv.org/abs/2512.00966) |

## Papers by Year

### 2026

| Paper | Tags | Summary |
| --- | --- | --- |
| [An Evaluation of Data Leakage Risks in Tool-Using LLM Agents in Realistic Scenarios](https://arxiv.org/abs/2606.17114) | <span class="tag">privacy</span> <span class="tag">data leakage</span> <span class="tag">evaluation</span> | Studies non-adversarial data-handling failures in realistic tool-using agents, separating task success from safe information handling. |
| [ARGUS: Defending LLM Agents Against Context-Aware Prompt Injection](https://arxiv.org/abs/2605.03378) | <span class="tag">defense</span> <span class="tag">provenance</span> <span class="tag">benchmark</span> | Introduces AgentLure for context-aware prompt injection and uses provenance-aware decision auditing to validate proposed agent actions. |
| [AI Agents May Always Fall for Prompt Injections](https://arxiv.org/abs/2605.17634) | <span class="tag">theory</span> <span class="tag">contextual integrity</span> <span class="tag">prompt injection</span> | Reframes prompt injection through contextual integrity and argues that simple data-instruction separation misses context-sensitive attacks. |
| [From Prompt Injection to Persistent Control: Defending Agentic Harness Against Trojan Backdoors](https://arxiv.org/abs/2605.31042) | <span class="tag">backdoor</span> <span class="tag">persistent control</span> <span class="tag">defense</span> | Shows how untrusted text can become persistent control content across local agent sessions and proposes DASGuard to sanitize control-like state. |
| [Stateful Agent Backdoor](https://arxiv.org/abs/2605.06158) | <span class="tag">backdoor</span> <span class="tag">stateful attack</span> <span class="tag">persistence</span> | Models multi-session agent backdoors as stateful machines that maintain attack progress through persistent components. |
| [Defense Against Indirect Prompt Injection via Tool Result Parsing](https://arxiv.org/abs/2601.04795) | <span class="tag">defense</span> <span class="tag">tool output</span> <span class="tag">parsing</span> | Defends against malicious instructions embedded in tool results by parsing tool outputs before they influence agent decisions. |
| [Navigating the Risks: A Survey of Security and Privacy Threats in LLM-Based Agents](https://doi.org/10.1145/3807666) | <span class="tag">survey</span> <span class="tag">security</span> <span class="tag">privacy</span> | Surveys security and privacy threats introduced when LLMs are embedded into software engineering workflows as autonomous or semi-autonomous agents. |

### 2025

| Paper | Tags | Summary |
| --- | --- | --- |
| [Mitigating Indirect Prompt Injection via Instruction-Following Intent Analysis](https://arxiv.org/abs/2512.00966) | <span class="tag">defense</span> <span class="tag">intent analysis</span> <span class="tag">IPI</span> | Proposes IntentGuard, which detects whether the model intends to follow instructions originating from untrusted data. |
| [Simple Prompt Injection Attacks Can Leak Personal Data Observed by LLM Agents During Task Execution](https://arxiv.org/abs/2506.01055) | <span class="tag">privacy</span> <span class="tag">exfiltration</span> <span class="tag">AgentDojo</span> | Extends AgentDojo-style scenarios to study how prompt injection can leak personal data observed during task execution. |
| [Prompt Injection Attack to Tool Selection in LLM Agents](https://arxiv.org/abs/2504.19793) | <span class="tag">tool selection</span> <span class="tag">attack</span> <span class="tag">ToolHijacker</span> | Attacks the retrieval-and-selection stage of agent tool use by injecting malicious tool documents into a tool library. |
| [Defeating Prompt Injections by Design](https://arxiv.org/abs/2503.18813) | <span class="tag">defense</span> <span class="tag">capabilities</span> <span class="tag">control/data flow</span> | Presents CaMeL, a secure agent layer that separates trusted control flow from untrusted data and enforces capability-based tool policies. |

### 2024

| Paper | Tags | Summary |
| --- | --- | --- |
| [AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents](https://arxiv.org/abs/2410.09024) | <span class="tag">benchmark</span> <span class="tag">harmfulness</span> <span class="tag">jailbreak</span> | Evaluates whether LLM agents refuse or complete harmful multi-step tasks, including cases where jailbreaks preserve agent capability. |
| [SecAlign: Defending Against Prompt Injection with Preference Optimization](https://arxiv.org/abs/2410.05451) | <span class="tag">defense</span> <span class="tag">alignment</span> <span class="tag">prompt injection</span> | Uses preference optimization to make models prefer outputs that follow legitimate instructions over injected ones. |
| [PrivacyLens: Evaluating Privacy Norm Awareness of Language Models in Action](https://arxiv.org/abs/2409.00138) | <span class="tag">privacy</span> <span class="tag">agent actions</span> <span class="tag">benchmark</span> | Converts privacy-sensitive cases into agent trajectories to test whether language models leak sensitive information during action execution. |
| [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://arxiv.org/abs/2406.13352) | <span class="tag">benchmark</span> <span class="tag">IPI</span> <span class="tag">defense evaluation</span> | Provides an extensible environment with realistic tasks, security test cases, attacks, and defenses for tool-using agents over untrusted data. |
| [InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents](https://arxiv.org/abs/2403.02691) | <span class="tag">benchmark</span> <span class="tag">IPI</span> <span class="tag">tool use</span> | Benchmarks indirect prompt injection against tool-integrated agents across user tools, attacker tools, harmful actions, and data exfiltration. |
| [StruQ: Defending Against Prompt Injection with Structured Queries](https://arxiv.org/abs/2402.06363) | <span class="tag">defense</span> <span class="tag">structured query</span> <span class="tag">instruction/data separation</span> | Separates prompts and data into structured channels and fine-tunes models to follow only the instruction channel. |

### 2023

| Paper | Tags | Summary |
| --- | --- | --- |
| [Benchmarking and Defending Against Indirect Prompt Injection Attacks on Large Language Models](https://arxiv.org/abs/2312.14197) | <span class="tag">BIPIA</span> <span class="tag">benchmark</span> <span class="tag">defense</span> | Introduces BIPIA for evaluating indirect prompt injection in LLM applications and proposes boundary-awareness and reminder-based defenses. |
| [Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://arxiv.org/abs/2309.15817) | <span class="tag">ToolEmu</span> <span class="tag">risk evaluation</span> <span class="tag">tool use</span> | Uses an LLM-emulated sandbox to evaluate tool-use risks and failures without executing risky real-world actions. |

## Papers by Topic

### Prompt Injection and Indirect Prompt Injection

- [BIPIA](https://arxiv.org/abs/2312.14197)
- [InjecAgent](https://arxiv.org/abs/2403.02691)
- [AgentDojo](https://arxiv.org/abs/2406.13352)
- [Simple Prompt Injection Attacks Can Leak Personal Data](https://arxiv.org/abs/2506.01055)
- [IntentGuard](https://arxiv.org/abs/2512.00966)
- [ARGUS](https://arxiv.org/abs/2605.03378)
- [AI Agents May Always Fall for Prompt Injections](https://arxiv.org/abs/2605.17634)

### Tool Use, Tool Results, and Tool Selection

- [ToolEmu](https://arxiv.org/abs/2309.15817)
- [Prompt Injection Attack to Tool Selection in LLM Agents](https://arxiv.org/abs/2504.19793)
- [Defense Against Indirect Prompt Injection via Tool Result Parsing](https://arxiv.org/abs/2601.04795)

### Privacy and Data Leakage

- [PrivacyLens](https://arxiv.org/abs/2409.00138)
- [Simple Prompt Injection Attacks Can Leak Personal Data](https://arxiv.org/abs/2506.01055)
- [An Evaluation of Data Leakage Risks in Tool-Using LLM Agents in Realistic Scenarios](https://arxiv.org/abs/2606.17114)

### Backdoors, Memory, and Persistent Control

- [Stateful Agent Backdoor](https://arxiv.org/abs/2605.06158)
- [From Prompt Injection to Persistent Control](https://arxiv.org/abs/2605.31042)

### Defense Mechanisms

- [StruQ](https://arxiv.org/abs/2402.06363)
- [SecAlign](https://arxiv.org/abs/2410.05451)
- [CaMeL](https://arxiv.org/abs/2503.18813)
- [IntentGuard](https://arxiv.org/abs/2512.00966)
- [ARGUS](https://arxiv.org/abs/2605.03378)
- [Tool Result Parsing](https://arxiv.org/abs/2601.04795)

## Contributing

Contributions are welcome. Please open an issue or pull request if you want to:

- add a missing paper;
- correct metadata, venue, links, or tags;
- add a concise paper summary;
- suggest a new taxonomy for agent security research;
- report broken links.

Suggested entry format:

```markdown
| [Paper Title](paper-url) | <span class="tag">tag</span> | One-sentence summary of threat model, method, or finding. |
```

## License

This paper list is intended for academic use and community maintenance. Please cite the original papers when using their ideas, benchmarks, or results.
