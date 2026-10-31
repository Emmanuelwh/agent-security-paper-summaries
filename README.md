# Agent Security Research Papers

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-16836b.svg)](#contributing)
[![License](https://img.shields.io/badge/license-CC%20BY%204.0-2563a6.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-b33a3a.svg)](https://emmanuelwh.github.io/agent-security-paper-summaries/)

> We aim to systematically track agent-security research across security and software engineering conferences and journals. Because AI venues publish a much larger volume of papers, we collect relevant AI work as comprehensively as possible and continuously expand the bibliography. The collection covers prompt injection, tool and action security, memory poisoning, privacy leakage, agent misuse, benchmarks, red teaming, and system-level defenses. Contributions and corrections are welcome.

## Contents

[2026](#2026) | [2025](#2025) | [2024](#2024)

[Benchmarks and Evaluation](#benchmarks-and-evaluation) | [Prompt Injection Attacks](#prompt-injection-attacks) | [Defenses and Secure Design](#defenses-and-secure-design) | [Tool and Action Security](#tool-and-action-security) | [Memory, RAG, and Privacy](#memory-rag-and-privacy) | [Agent Misuse and Red Teaming](#agent-misuse-and-red-teaming) | [Preprints](#preprints)

---

## All Papers

### 2026

> AI conference entries retain their official presentation labels. `Boundary case` marks papers included for completeness even though their protected object or primary contribution extends beyond adversarial agent security.

#### ICSE

- [AgentSpec: Customizable Runtime Enforcement for Safe and Reliable LLM Agents](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/29/AgentSpec-Customizable-Runtime-Enforcement-for-Safe-and-Reliable-LLM-Agents)
- [TaintP2X: Detecting Taint-Style Prompt-to-Anything Injection Vulnerabilities in LLM-Integrated Applications](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/157/TaintP2X-Detecting-Taint-Style-Prompt-to-Anything-Injection-Vulnerabilities-in-LLM-I) (Boundary case: broader LLM-integrated applications)

#### FSE

- [AgentBound: Securing Execution Boundaries of AI Agents](https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/14/AgentBound-Securing-Execution-Boundaries-of-AI-Agents)

#### ASE

- [Safeguarding LLM Agents from Misalignment through Provenance Analysis](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/239/Safeguarding-LLM-Agents-from-Misalignment-through-Provenance-Analysis)
- [How Your Credentials Are Leaked by LLM Agent Skills: An Empirical Study](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/43/How-Your-Credentials-Are-Leaked-by-LLM-Agent-Skills-An-Empirical-Study)
- [When Compression Becomes an Attack Surface: Black-Box Attacks on Prompt-Compressed LLM Agents](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/64/When-Compression-Becomes-an-Attack-Surface-Black-Box-Attacks-on-Prompt-Compressed-LL)
- [MalSkills: Detecting Malicious Skills in the Agentic Supply Chain via Neuro-Symbolic Reasoning](https://doi.org/10.1145/3832783.3834375)
- ["Impossible to Hide Secret ...": Uncovering Security and Privacy Issues in LLM-Native IDEs](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/133/-Impossible-to-Hide-Secret-Uncovering-Security-and-Privacy-Issues-in-LLM-Native) (Boundary case)

#### ISSTA

- [AgentBreaker: Evaluating Context-Aware Indirect Prompt Injection Risks in Modern Web Agents](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/74/AgentBreaker-Evaluating-Context-Aware-Indirect-Prompt-Injection-Risks-in-Modern-Web-)
- [Datura: Progressive Red Teaming Testing for Tool Invocation Chain in LLM Agents](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/10/Datura-Progressive-Red-Teaming-Testing-for-Tool-Invocation-Chain-in-LLM-Agents)
- [Red-Teaming Coding Agents from a Tool-Invocation Perspective: An Empirical Security Assessment](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/176/Red-Teaming-Coding-Agents-from-a-Tool-Invocation-Perspective-An-Empirical-Security-A)

#### IEEE TSE

- [Beyond the Protocol: Unveiling Attack Vectors in the Model Context Protocol (MCP) Ecosystem](https://ieeexplore.ieee.org/document/11528180/)

#### USENIX Security

- [MUZZLE: Adaptive Agentic Red-Teaming of Web Agents Against Indirect Prompt Injection Attacks](https://www.usenix.org/conference/usenixsecurity26/presentation/syros)
- [AttriGuard: Defeating Indirect Prompt Injection in LLM Agents via Causal Attribution of Tool Invocations](https://www.usenix.org/conference/usenixsecurity26/presentation/he-yu)
- [Overcoming the Retrieval Barrier: Indirect Prompt Injection in the Wild for LLM Systems](https://www.usenix.org/conference/usenixsecurity26/presentation/chang-hongyan)
- [FragFuse: Bypassing Access Control of Large Language Model Agents via Memory-Based Query Fragmentation and Fusion](https://www.usenix.org/conference/usenixsecurity26/presentation/rao)
- [Autonomy Comes with Costs: Detecting Denial-of-Service Vulnerabilities Caused by Resource Abusing in LLM-based Agents](https://www.usenix.org/conference/usenixsecurity26/presentation/luo)
- [When AIOps Become "AI Oops": Subverting LLM-driven IT Operations via Telemetry Manipulation](https://www.usenix.org/conference/usenixsecurity26/presentation/pasquini)
- ["Do Not Mention This to the User": Detecting and Understanding Malicious Agent Skills in the Wild](https://www.usenix.org/conference/usenixsecurity26/presentation/liu-yi)
- [Network-Level Prompt and Trait Leakage in Local Research Agents](https://www.usenix.org/conference/usenixsecurity26/presentation/jeong)
- [MATE: Policy-Aware Security Auditing for Mobile Agents via Synthesis-Driven Trajectory Learning](https://www.usenix.org/conference/usenixsecurity26/presentation/jiang-changyue)

#### NDSS

- [ACE: A Security Architecture for LLM-Integrated App Systems](https://www.ndss-symposium.org/ndss-paper/ace-a-security-architecture-for-llm-integrated-app-systems/)
- [SAGA: A Security Architecture for Governing AI Agentic Systems](https://www.ndss-symposium.org/ndss-paper/saga-a-security-architecture-for-governing-ai-agentic-systems/)
- [Prompt Injection Attack to Tool Selection in LLM Agents](https://www.ndss-symposium.org/ndss-paper/prompt-injection-attack-to-tool-selection-in-llm-agents/)
- [ObliInjection: Order-Oblivious Prompt Injection Attack to LLM Agents with Multi-source Data](https://www.ndss-symposium.org/ndss-paper/obliinjection-order-oblivious-prompt-injection-attack-to-llm-agents-with-multi-source-data/) (Boundary case)
- [Les Dissonances: Cross-Tool Harvesting and Polluting in Pool-of-Tools Empowered LLM Agents](https://www.ndss-symposium.org/ndss-paper/les-dissonances-cross-tool-harvesting-and-polluting-in-pool-of-tools-empowered-llm-agents/)

#### IEEE S&P

- [Parasites in the Toolchain: A Large-Scale Analysis of Attacks on the MCP Ecosystem](https://doi.org/10.1109/SP63933.2026.00154)
- [Site Isolation is Dead: How Site Isolation is Broken in Agentic Browsers and Extensions](https://doi.org/10.1109/SP63933.2026.00241)
- [Towards Automating Data Access Permissions in AI Agents](https://doi.org/10.1109/SP63933.2026.00018)
- [Investigating the Impact of Dark Patterns on LLM-Based Web Agents](https://doi.org/10.1109/SP63933.2026.00042)
- [Demystifying the (In)Security of OAuth-based Account Linking in Connector Ecosystems](https://doi.org/10.1109/SP63933.2026.00128) (Boundary case)

#### NeurIPS

- [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments](https://openreview.net/forum?id=iCXoa3VMy0) (Oral)
- [Soteria: Formally Verified Planning with Runtime Enforcement for Safe LLM Agents](https://openreview.net/forum?id=9url1EFMaU) (Oral; safety/reliability boundary)
- [AgentAbstain: Do LLM Agents Know When Not to Act?](https://openreview.net/forum?id=Iee7eL6QV0) (Oral; safety/reliability boundary)

#### ICLR

- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://openreview.net/pdf?id=yWwrgcBoK3) (Oral)
- [Reliable Weak-to-Strong Monitoring of LLM Agents](https://openreview.net/pdf?id=WV7xIboTDK) (Oral)
- [A2ASecBench: A Protocol-Aware Security Benchmark for Agent-to-Agent Multi-Agent Systems](https://openreview.net/pdf/cbf9372232d6c3383d426389d44c490277480d16.pdf) (Poster)
- [ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents](https://openreview.net/pdf/0846b87f9fc1335b49ed0f9aec51ffb55f7395f1.pdf) (Poster)
- [Monitoring Decomposition Attacks with Lightweight Sequential Monitors](https://proceedings.iclr.cc/paper_files/paper/2026/hash/2985777c8f2152664946ed30deb77291-Abstract-Conference.html) (Poster)
- [Adaptive Attacks on Trusted Monitors Subvert AI Control Protocols](https://proceedings.iclr.cc/paper_files/paper/2026/hash/54b153ad8a138f4c186f21a8b7341d5e-Abstract-Conference.html) (Poster)
- [Optimizing Agent Planning for Security and Autonomy](https://openreview.net/pdf/1d8e643bf94ce0bea80f37ecd76352aa34e4e4cf.pdf) (Poster)
- [DECEPTION: How Dark Patterns Manipulate Web Agents](https://openreview.net/attachment?id=G7Dan0L7ho&name=pdf) (Poster)

#### ICML

- [AgentLAB: Benchmarking LLM Agents against Long-Horizon Attacks](https://proceedings.mlr.press/v306/jiang26as.html) (Poster)
- [Think Twice Before You Act: Protecting LLM Agents Against Tool Description Poisoning via Isolated Planning](https://proceedings.mlr.press/v306/shi26ab.html) (Poster)
- [SafeHarbor: Defining Precise Decision Boundaries via Hierarchical Memory-Augmented Guardrail for LLM Agent Safety](https://proceedings.mlr.press/v306/liu26fn.html) (Poster)
- [AIR: Improving Agent Safety through Incident Response](https://proceedings.mlr.press/v306/xiao26n.html) (Poster)
- [PrivAct: Internalizing Contextual Privacy Preservation via Multi-Agent Preference Training](https://proceedings.mlr.press/v306/cheng26o.html) (Poster)
- [Architecture Matters for Multi-Agent Security](https://proceedings.mlr.press/v306/hagag26a.html) (Poster)

#### ACL

- [VIGIL: Defending LLM Agents Against Tool-Stream Injection via Verify-Before-Commit](https://aclanthology.org/2026.acl-long.443/)
- [ToolSafe: Enhancing Tool Invocation Safety of LLM-based Agents](https://aclanthology.org/2026.findings-acl.1850/)

#### EMNLP

- [LogicInception: Discourse-Level Indirect Prompt Injection via Causal Chain Construction](https://aclanthology.org/2026.emnlp-main.1831/)
- [Will the User Ever Know? Covert Indirect Prompt Injection Attacks on Tool-Using LLM Agents](https://aclanthology.org/2026.emnlp-main.2035/)
- [AdapTools: Adaptive Tool-based Indirect Prompt Injection Attacks on Agentic LLMs](https://aclanthology.org/2026.emnlp-main.2055/)
- [RecoverAgent: Intent-Preserving Recovery from Indirect Prompt Injection in Tool-using LLM Agents](https://aclanthology.org/2026.findings-emnlp.830/)
- [IterInject: Indirect Prompt Injection Against LLM Agents via Feedback-Guided Iterative Optimization](https://aclanthology.org/2026.findings-emnlp.808/)
- [Agent Tools Orchestration Leaks More: Dataset, Benchmark, and Mitigation](https://aclanthology.org/2026.findings-emnlp.1293/)
- [AgenTRIM: Tool Risk Mitigation for Agentic AI](https://aclanthology.org/2026.findings-emnlp.1102/)

### 2025

#### ASE

- [Security Debt in LLM Agent Applications: A Measurement Study of Vulnerabilities and Mitigation Trade-offs](https://conf.researchr.org/details/ase-2025/ase-2025-papers/19/Security-Debt-in-LLM-Agent-Applications-A-Measurement-Study-of-Vulnerabilities-and-M)

#### ICSE

- [Prompt-to-SQL Injections in LLM-Integrated Web Applications: Risks and Defenses](https://conf.researchr.org/details/icse-2025/icse-2025-research-track/31/Prompt-to-SQL-Injections-in-LLM-Integrated-Web-Applications-Risks-and-Defenses) (Boundary case)

#### NDSS

- [IsolateGPT: An Execution Isolation Architecture for LLM-Based Agentic Systems](https://www.ndss-symposium.org/ndss-paper/isolategpt-an-execution-isolation-architecture-for-llm-based-agentic-systems/)

#### USENIX Security

- [Make Agent Defeat Agent: Automatic Detection of Taint-Style Vulnerabilities in LLM-based Agents](https://www.usenix.org/conference/usenixsecurity25/presentation/liu-fengyu)
- [StruQ: Defending Against Prompt Injection with Structured Queries](https://www.usenix.org/conference/usenixsecurity25/presentation/chen-sizhe)
- [Cloak, Honey, Trap: Proactive Defenses Against LLM Agents](https://www.usenix.org/conference/usenixsecurity25/presentation/ayzenshteyn)
- [When LLMs Go Online: The Emerging Threat of Web-Enabled LLMs](https://www.usenix.org/conference/usenixsecurity25/presentation/kim-hanna)

#### NeurIPS

- [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://papers.neurips.cc/paper_files/paper/2025/hash/4009bff0cd87ba2203c8e3a2f082aaec-Abstract-Datasets_and_Benchmarks_Track.html) (Spotlight)
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://proceedings.nips.cc/paper_files/paper/2025/hash/1c9818387f5dd0a0bc151214660f059d-Abstract-Datasets_and_Benchmarks_Track.html) (Poster)
- [Security Challenges in AI Agent Deployment: Insights from a Large Scale Public Competition](https://proceedings.neurips.cc/paper_files/paper/2025/hash/73368bc7644c054b5bcc6490a8f2fb1c-Abstract-Datasets_and_Benchmarks_Track.html)
- [AgentDAM: Privacy Leakage Evaluation for Autonomous Web Agents](https://proceedings.neurips.cc/paper_files/paper/2025/hash/c9826b9ea5e1b49b256329934a578d83-Abstract-Datasets_and_Benchmarks_Track.html) (Poster)
- [Memory Injection Attacks on LLM Agents via Query-Only Interaction](https://proceedings.neurips.cc/paper_files/paper/2025/hash/42a97bbd9844d2bf68596730af80bcdf-Abstract-Conference.html) (Poster)
- [MIP against Agent: Malicious Image Patches Hijacking Multimodal OS Agents](https://papers.neurips.cc/paper_files/paper/2025/hash/1add4b4f8373c64504cfe4a3054700a1-Abstract-Conference.html) (Poster)
- [Attractive Metadata Attack: Inducing LLM Agents to Invoke Malicious Tools](https://papers.neurips.cc/paper_files/paper/2025/hash/ee46288ab2aaf5c6e53aebebe719712c-Abstract-Conference.html) (Poster)

#### ICLR

- [Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/5750f91d8fb9d5c02bd8ad2c3b44456b-Abstract-Conference.html) (Poster)
- [AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/c493d23af93118975cdbc32cbe7323f5-Abstract-Conference.html) (Poster)
- [Aligned LLMs Are Not Aligned Browser Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/42f92b78a6695f60db0cd38b54d57a41-Abstract-Conference.html) (Poster)
- [EIA: Environmental Injection Attack on Generalist Web Agents for Privacy Leakage](https://proceedings.iclr.cc/paper_files/paper/2025/hash/a73474c359ed523e6cd3174ed29a4d56-Abstract-Conference.html) (Poster)
- [Dissecting Adversarial Robustness of Multimodal LM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/460a1d8eac34125dad453b28d6d64446-Abstract-Conference.html) (Poster)

#### ICML

- [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://proceedings.mlr.press/v267/tur25a.html) (Poster)
- [MELON: Provable Defense Against Indirect Prompt Injection Attacks in AI Agents](https://proceedings.mlr.press/v267/zhu25z.html) (Poster)
- [ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://proceedings.mlr.press/v267/chen25ae.html) (Poster)
- [GuardAgent: Safeguard LLM Agents via Knowledge-Enabled Reasoning](https://proceedings.mlr.press/v267/xiang25a.html) (Poster)
- [AdvAgent: Controllable Blackbox Red-teaming on Web Agents](https://proceedings.mlr.press/v267/xu25m.html) (Poster)
- [On the Resilience of LLM-Based Multi-Agent Collaboration with Faulty Agents](https://proceedings.mlr.press/v267/huang25ay.html) (Poster)

#### KDD

- [Benchmarking and Defending Against Indirect Prompt Injection Attacks on Large Language Models](https://doi.org/10.1145/3690624.3709179)

#### ACL

- [The Task Shield: Enforcing Task Alignment to Defend Against Indirect Prompt Injection in LLM Agents](https://aclanthology.org/2025.acl-long.1435/)
- [Can Indirect Prompt Injection Attacks Be Detected and Removed?](https://aclanthology.org/2025.acl-long.890/)

#### NAACL

- [Breaking ReAct Agents: Foot-in-the-Door Attack Will Get You In](https://aclanthology.org/2025.findings-naacl.363/)

#### EMNLP

- [AGENTVIGIL: Automatic Black-Box Red-teaming for Indirect Prompt Injection against LLM Agents](https://aclanthology.org/2025.findings-emnlp.1258/)
- [IPIGuard: A Tool Dependency Graph-Based Defense Against Indirect Prompt Injection in LLM Agents](https://aclanthology.org/2025.emnlp-main.53/)
- [Privacy in Action: Towards Realistic Privacy Mitigation and Evaluation for LLM-Powered Agents](https://aclanthology.org/2025.findings-emnlp.925/)

#### CCS

- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://doi.org/10.1145/3719027.3765064)
- [Here Comes the AI Worm: Preventing the Propagation of Adversarial Self-Replicating Prompts Within GenAI Ecosystems](https://doi.org/10.1145/3719027.3765196)
- [SecAlign: Defending Against Prompt Injection with Preference Optimization](https://arxiv.org/abs/2410.05451)

### 2024

#### ASE

- [Exploring ChatGPT App Ecosystem: Distribution, Deployment and Security](https://doi.org/10.1145/3691620.3695510)

#### IEEE TDSC

- [PrivacyAsst: Safeguarding User Privacy in Tool-Using Large Language Model Agents](https://ieeexplore.ieee.org/abstract/document/10458329/)

#### NeurIPS

- [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.nips.cc/paper_files/paper/2024/hash/97091a5177d8dc64b1da8bf3e1f6fb54-Abstract-Datasets_and_Benchmarks_Track.html)
- [PrivacyLens: Evaluating Privacy Norm Awareness of Language Models in Action](https://papers.nips.cc/paper_files/paper/2024/hash/a2a7e58309d5190082390ff10ff3b2b8-Abstract-Datasets_and_Benchmarks_Track.html)
- [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/hash/eb113910e9c3f6242541c1652e30dfd6-Abstract-Conference.html)
- [Watch Out for Your Agents! Investigating Backdoor Threats to LLM-Based Agents](https://proceedings.neurips.cc/paper_files/paper/2024/hash/b6e9d6f4f3428cd5f3f9e9bbae2cab10-Abstract-Conference.html)
- [Secret Collusion among AI Agents: Multi-Agent Deception via Steganography](https://proceedings.neurips.cc/paper_files/paper/2024/hash/861f7dad098aec1c3560fb7add468d41-Abstract-Conference.html)

#### ICML

- [Agent Smith: A Single Image Can Jailbreak One Million Multimodal LLM Agents Exponentially Fast](https://proceedings.mlr.press/v235/gu24e.html)
- [Feedback Loops With Language Models Drive In-Context Reward Hacking](https://proceedings.mlr.press/v235/pan24d.html)

#### ICLR

- [Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://proceedings.iclr.cc/paper_files/paper/2024/hash/7274ed909a312d4d869cc328ad1c5f04-Abstract-Conference.html)

#### ACL

- [InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents](https://aclanthology.org/2024.findings-acl.624/)

#### USENIX Security

- [Formalizing and Benchmarking Prompt Injection Attacks and Defenses](https://www.usenix.org/conference/usenixsecurity24/presentation/liu-yupei)

---

## Papers by Topic

### Benchmarks and Evaluation

Benchmarks, test environments, and empirical evaluations that measure agent security, harmful task completion, or deployment risk.

#### General Agent Security

- [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments](https://openreview.net/forum?id=iCXoa3VMy0) (NeurIPS '26; Oral)
- [AgentLAB: Benchmarking LLM Agents against Long-Horizon Attacks](https://proceedings.mlr.press/v306/jiang26as.html) (ICML '26; Poster)
- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://openreview.net/pdf?id=yWwrgcBoK3) (ICLR '26; Oral)
- [ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents](https://openreview.net/pdf/0846b87f9fc1335b49ed0f9aec51ffb55f7395f1.pdf) (ICLR '26; Poster)
- [A2ASecBench: A Protocol-Aware Security Benchmark for Agent-to-Agent Multi-Agent Systems](https://openreview.net/pdf/cbf9372232d6c3383d426389d44c490277480d16.pdf) (ICLR '26; Poster)
- [AgentAbstain: Do LLM Agents Know When Not to Act?](https://openreview.net/forum?id=Iee7eL6QV0) (NeurIPS '26; Oral; safety/reliability boundary)
- [MATE: Policy-Aware Security Auditing for Mobile Agents via Synthesis-Driven Trajectory Learning](https://www.usenix.org/conference/usenixsecurity26/presentation/jiang-changyue) (USENIX Security '26)
- [Red-Teaming Coding Agents from a Tool-Invocation Perspective: An Empirical Security Assessment](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/176/Red-Teaming-Coding-Agents-from-a-Tool-Invocation-Perspective-An-Empirical-Security-A) (ISSTA '26)
- [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://papers.neurips.cc/paper_files/paper/2025/hash/4009bff0cd87ba2203c8e3a2f082aaec-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '25; Spotlight)
- [Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/5750f91d8fb9d5c02bd8ad2c3b44456b-Abstract-Conference.html) (ICLR '25; Poster)
- [AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/c493d23af93118975cdbc32cbe7323f5-Abstract-Conference.html) (ICLR '25; Poster)
- [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://proceedings.mlr.press/v267/tur25a.html) (ICML '25; Poster)
- [Dissecting Adversarial Robustness of Multimodal LM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/460a1d8eac34125dad453b28d6d64446-Abstract-Conference.html) (ICLR '25; Poster)
- [Security Challenges in AI Agent Deployment: Insights from a Large Scale Public Competition](https://proceedings.neurips.cc/paper_files/paper/2025/hash/73368bc7644c054b5bcc6490a8f2fb1c-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '25)
- [Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://proceedings.iclr.cc/paper_files/paper/2024/hash/7274ed909a312d4d869cc328ad1c5f04-Abstract-Conference.html) (ICLR '24)

#### Prompt Injection Benchmarks

- [AgentBreaker: Evaluating Context-Aware Indirect Prompt Injection Risks in Modern Web Agents](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/74/AgentBreaker-Evaluating-Context-Aware-Indirect-Prompt-Injection-Risks-in-Modern-Web-) (ISSTA '26)
- [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.nips.cc/paper_files/paper/2024/hash/97091a5177d8dc64b1da8bf3e1f6fb54-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '24)
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://proceedings.nips.cc/paper_files/paper/2025/hash/1c9818387f5dd0a0bc151214660f059d-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '25; Poster)
- [InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents](https://aclanthology.org/2024.findings-acl.624/) (ACL Findings '24)
- [Benchmarking and Defending Against Indirect Prompt Injection Attacks on Large Language Models](https://doi.org/10.1145/3690624.3709179) (KDD '25)
- [Formalizing and Benchmarking Prompt Injection Attacks and Defenses](https://www.usenix.org/conference/usenixsecurity24/presentation/liu-yupei) (USENIX Security '24)

### Prompt Injection Attacks

Attacks that place malicious instructions in external content, tool streams, retrieval corpora, or multi-step agent context.

#### Indirect and Context-Aware Attacks

- [When Compression Becomes an Attack Surface: Black-Box Attacks on Prompt-Compressed LLM Agents](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/64/When-Compression-Becomes-an-Attack-Surface-Black-Box-Attacks-on-Prompt-Compressed-LL) (ASE '26)
- [Prompt Injection Attack to Tool Selection in LLM Agents](https://www.ndss-symposium.org/ndss-paper/prompt-injection-attack-to-tool-selection-in-llm-agents/) (NDSS '26)
- [ObliInjection: Order-Oblivious Prompt Injection Attack to LLM Agents with Multi-source Data](https://www.ndss-symposium.org/ndss-paper/obliinjection-order-oblivious-prompt-injection-attack-to-llm-agents-with-multi-source-data/) (NDSS '26; Boundary case)
- [Monitoring Decomposition Attacks with Lightweight Sequential Monitors](https://proceedings.iclr.cc/paper_files/paper/2026/hash/2985777c8f2152664946ed30deb77291-Abstract-Conference.html) (ICLR '26; Poster)
- [Adaptive Attacks on Trusted Monitors Subvert AI Control Protocols](https://proceedings.iclr.cc/paper_files/paper/2026/hash/54b153ad8a138f4c186f21a8b7341d5e-Abstract-Conference.html) (ICLR '26; Poster)
- [DECEPTION: How Dark Patterns Manipulate Web Agents](https://openreview.net/attachment?id=G7Dan0L7ho&name=pdf) (ICLR '26; Poster)
- [TaintP2X: Detecting Taint-Style Prompt-to-Anything Injection Vulnerabilities in LLM-Integrated Applications](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/157/TaintP2X-Detecting-Taint-Style-Prompt-to-Anything-Injection-Vulnerabilities-in-LLM-I) (ICSE '26; Boundary case)
- [EIA: Environmental Injection Attack on Generalist Web Agents for Privacy Leakage](https://proceedings.iclr.cc/paper_files/paper/2025/hash/a73474c359ed523e6cd3174ed29a4d56-Abstract-Conference.html) (ICLR '25; Poster)
- [AdvAgent: Controllable Blackbox Red-teaming on Web Agents](https://proceedings.mlr.press/v267/xu25m.html) (ICML '25; Poster)
- [Prompt-to-SQL Injections in LLM-Integrated Web Applications: Risks and Defenses](https://conf.researchr.org/details/icse-2025/icse-2025-research-track/31/Prompt-to-SQL-Injections-in-LLM-Integrated-Web-Applications-Risks-and-Defenses) (ICSE '25; Boundary case)
- [MUZZLE: Adaptive Agentic Red-Teaming of Web Agents Against Indirect Prompt Injection Attacks](https://www.usenix.org/conference/usenixsecurity26/presentation/syros) (USENIX Security '26)
- [AGENTVIGIL: Automatic Black-Box Red-teaming for Indirect Prompt Injection against LLM Agents](https://aclanthology.org/2025.findings-emnlp.1258/) (EMNLP Findings '25)
- [Breaking ReAct Agents: Foot-in-the-Door Attack Will Get You In](https://aclanthology.org/2025.findings-naacl.363/) (NAACL Findings '25)
- [IterInject: Indirect Prompt Injection Against LLM Agents via Feedback-Guided Iterative Optimization](https://aclanthology.org/2026.findings-emnlp.808/) (EMNLP Findings '26)
- [LogicInception: Discourse-Level Indirect Prompt Injection via Causal Chain Construction](https://aclanthology.org/2026.emnlp-main.1831/) (EMNLP '26)
- [Will the User Ever Know? Covert Indirect Prompt Injection Attacks on Tool-Using LLM Agents](https://aclanthology.org/2026.emnlp-main.2035/) (EMNLP '26)

#### Retrieval and Tool-Stream Attacks

- [Think Twice Before You Act: Protecting LLM Agents Against Tool Description Poisoning via Isolated Planning](https://proceedings.mlr.press/v306/shi26ab.html) (ICML '26; Poster)
- [Les Dissonances: Cross-Tool Harvesting and Polluting in Pool-of-Tools Empowered LLM Agents](https://www.ndss-symposium.org/ndss-paper/les-dissonances-cross-tool-harvesting-and-polluting-in-pool-of-tools-empowered-llm-agents/) (NDSS '26)
- [Overcoming the Retrieval Barrier: Indirect Prompt Injection in the Wild for LLM Systems](https://www.usenix.org/conference/usenixsecurity26/presentation/chang-hongyan) (USENIX Security '26)
- [AdapTools: Adaptive Tool-based Indirect Prompt Injection Attacks on Agentic LLMs](https://aclanthology.org/2026.emnlp-main.2055/) (EMNLP '26)
- [VIGIL: Defending LLM Agents Against Tool-Stream Injection via Verify-Before-Commit](https://aclanthology.org/2026.acl-long.443/) (ACL '26)

### Defenses and Secure Design

Model-level, runtime, and architectural defenses that preserve user intent and constrain agent actions.

#### Instruction and Intent Defenses

- [Safeguarding LLM Agents from Misalignment through Provenance Analysis](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/239/Safeguarding-LLM-Agents-from-Misalignment-through-Provenance-Analysis) (ASE '26)
- [Optimizing Agent Planning for Security and Autonomy](https://openreview.net/pdf/1d8e643bf94ce0bea80f37ecd76352aa34e4e4cf.pdf) (ICLR '26; Poster)
- [StruQ: Defending Against Prompt Injection with Structured Queries](https://www.usenix.org/conference/usenixsecurity25/presentation/chen-sizhe) (USENIX Security '25)
- [SecAlign: Defending Against Prompt Injection with Preference Optimization](https://arxiv.org/abs/2410.05451) (CCS '25)
- [The Task Shield: Enforcing Task Alignment to Defend Against Indirect Prompt Injection in LLM Agents](https://aclanthology.org/2025.acl-long.1435/) (ACL '25)
- [Can Indirect Prompt Injection Attacks Be Detected and Removed?](https://aclanthology.org/2025.acl-long.890/) (ACL '25)

#### Runtime and Graph-Based Defenses

- [AgentSpec: Customizable Runtime Enforcement for Safe and Reliable LLM Agents](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/29/AgentSpec-Customizable-Runtime-Enforcement-for-Safe-and-Reliable-LLM-Agents) (ICSE '26)
- [AgentBound: Securing Execution Boundaries of AI Agents](https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/14/AgentBound-Securing-Execution-Boundaries-of-AI-Agents) (FSE '26)
- [ACE: A Security Architecture for LLM-Integrated App Systems](https://www.ndss-symposium.org/ndss-paper/ace-a-security-architecture-for-llm-integrated-app-systems/) (NDSS '26)
- [SAGA: A Security Architecture for Governing AI Agentic Systems](https://www.ndss-symposium.org/ndss-paper/saga-a-security-architecture-for-governing-ai-agentic-systems/) (NDSS '26)
- [Soteria: Formally Verified Planning with Runtime Enforcement for Safe LLM Agents](https://openreview.net/forum?id=9url1EFMaU) (NeurIPS '26; Oral; safety/reliability boundary)
- [SafeHarbor: Defining Precise Decision Boundaries via Hierarchical Memory-Augmented Guardrail for LLM Agent Safety](https://proceedings.mlr.press/v306/liu26fn.html) (ICML '26; Poster)
- [AIR: Improving Agent Safety through Incident Response](https://proceedings.mlr.press/v306/xiao26n.html) (ICML '26; Poster)
- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://doi.org/10.1145/3719027.3765064) (CCS '25)
- [IsolateGPT: An Execution Isolation Architecture for LLM-Based Agentic Systems](https://www.ndss-symposium.org/ndss-paper/isolategpt-an-execution-isolation-architecture-for-llm-based-agentic-systems/) (NDSS '25)
- [MELON: Provable Defense Against Indirect Prompt Injection Attacks in AI Agents](https://proceedings.mlr.press/v267/zhu25z.html) (ICML '25; Poster)
- [ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://proceedings.mlr.press/v267/chen25ae.html) (ICML '25; Poster)
- [GuardAgent: Safeguard LLM Agents via Knowledge-Enabled Reasoning](https://proceedings.mlr.press/v267/xiang25a.html) (ICML '25; Poster)
- [AttriGuard: Defeating Indirect Prompt Injection in LLM Agents via Causal Attribution of Tool Invocations](https://www.usenix.org/conference/usenixsecurity26/presentation/he-yu) (USENIX Security '26)
- [IPIGuard: A Tool Dependency Graph-Based Defense Against Indirect Prompt Injection in LLM Agents](https://aclanthology.org/2025.emnlp-main.53/) (EMNLP '25)
- [RecoverAgent: Intent-Preserving Recovery from Indirect Prompt Injection in Tool-using LLM Agents](https://aclanthology.org/2026.findings-emnlp.830/) (EMNLP Findings '26)
- [AgenTRIM: Tool Risk Mitigation for Agentic AI](https://aclanthology.org/2026.findings-emnlp.1102/) (EMNLP Findings '26)

### Tool and Action Security

Unsafe tool selection, taint propagation, permission control, and action validation in tool-using agents.

#### Plugins, APIs, and Agent Frameworks

- [Beyond the Protocol: Unveiling Attack Vectors in the Model Context Protocol (MCP) Ecosystem](https://ieeexplore.ieee.org/document/11528180/) (IEEE TSE '26)
- [MalSkills: Detecting Malicious Skills in the Agentic Supply Chain via Neuro-Symbolic Reasoning](https://doi.org/10.1145/3832783.3834375) (ASE '26)
- ["Do Not Mention This to the User": Detecting and Understanding Malicious Agent Skills in the Wild](https://www.usenix.org/conference/usenixsecurity26/presentation/liu-yi) (USENIX Security '26)
- [Parasites in the Toolchain: A Large-Scale Analysis of Attacks on the MCP Ecosystem](https://doi.org/10.1109/SP63933.2026.00154) (IEEE S&P '26)
- ["Impossible to Hide Secret ...": Uncovering Security and Privacy Issues in LLM-Native IDEs](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/133/-Impossible-to-Hide-Secret-Uncovering-Security-and-Privacy-Issues-in-LLM-Native) (ASE '26; Boundary case)
- [Demystifying the (In)Security of OAuth-based Account Linking in Connector Ecosystems](https://doi.org/10.1109/SP63933.2026.00128) (IEEE S&P '26; Boundary case)
- [Security Debt in LLM Agent Applications: A Measurement Study of Vulnerabilities and Mitigation Trade-offs](https://conf.researchr.org/details/ase-2025/ase-2025-papers/19/Security-Debt-in-LLM-Agent-Applications-A-Measurement-Study-of-Vulnerabilities-and-M) (ASE '25)
- [Exploring ChatGPT App Ecosystem: Distribution, Deployment and Security](https://doi.org/10.1145/3691620.3695510) (ASE '24)
- [Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://proceedings.iclr.cc/paper_files/paper/2024/hash/7274ed909a312d4d869cc328ad1c5f04-Abstract-Conference.html) (ICLR '24)

#### Tool Invocation and Taint

- [Datura: Progressive Red Teaming Testing for Tool Invocation Chain in LLM Agents](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/10/Datura-Progressive-Red-Teaming-Testing-for-Tool-Invocation-Chain-in-LLM-Agents) (ISSTA '26)
- [Towards Automating Data Access Permissions in AI Agents](https://doi.org/10.1109/SP63933.2026.00018) (IEEE S&P '26)
- [MATE: Policy-Aware Security Auditing for Mobile Agents via Synthesis-Driven Trajectory Learning](https://www.usenix.org/conference/usenixsecurity26/presentation/jiang-changyue) (USENIX Security '26)
- [Attractive Metadata Attack: Inducing LLM Agents to Invoke Malicious Tools](https://papers.neurips.cc/paper_files/paper/2025/hash/ee46288ab2aaf5c6e53aebebe719712c-Abstract-Conference.html) (NeurIPS '25; Poster)
- [Make Agent Defeat Agent: Automatic Detection of Taint-Style Vulnerabilities in LLM-based Agents](https://www.usenix.org/conference/usenixsecurity25/presentation/liu-fengyu) (USENIX Security '25)
- [ToolSafe: Enhancing Tool Invocation Safety of LLM-based Agents](https://aclanthology.org/2026.findings-acl.1850/) (ACL Findings '26)
- [VIGIL: Defending LLM Agents Against Tool-Stream Injection via Verify-Before-Commit](https://aclanthology.org/2026.acl-long.443/) (ACL '26)

#### Web and Environment Interaction

- [Site Isolation is Dead: How Site Isolation is Broken in Agentic Browsers and Extensions](https://doi.org/10.1109/SP63933.2026.00241) (IEEE S&P '26)
- [When AIOps Become "AI Oops": Subverting LLM-driven IT Operations via Telemetry Manipulation](https://www.usenix.org/conference/usenixsecurity26/presentation/pasquini) (USENIX Security '26)
- [Investigating the Impact of Dark Patterns on LLM-Based Web Agents](https://doi.org/10.1109/SP63933.2026.00042) (IEEE S&P '26)
- [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments](https://openreview.net/forum?id=iCXoa3VMy0) (NeurIPS '26; Oral)
- [MIP against Agent: Malicious Image Patches Hijacking Multimodal OS Agents](https://papers.neurips.cc/paper_files/paper/2025/hash/1add4b4f8373c64504cfe4a3054700a1-Abstract-Conference.html) (NeurIPS '25; Poster)
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://proceedings.nips.cc/paper_files/paper/2025/hash/1c9818387f5dd0a0bc151214660f059d-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '25)
- [When LLMs Go Online: The Emerging Threat of Web-Enabled LLMs](https://www.usenix.org/conference/usenixsecurity25/presentation/kim-hanna) (USENIX Security '25)

### Memory, RAG, and Privacy

Attacks and defenses involving persistent memory, knowledge bases, private data, or cross-tool information flows.

#### Memory and Knowledge-Base Poisoning

- [Memory Injection Attacks on LLM Agents via Query-Only Interaction](https://proceedings.neurips.cc/paper_files/paper/2025/hash/42a97bbd9844d2bf68596730af80bcdf-Abstract-Conference.html) (NeurIPS '25; Poster)
- [Here Comes the AI Worm: Preventing the Propagation of Adversarial Self-Replicating Prompts Within GenAI Ecosystems](https://doi.org/10.1145/3719027.3765196) (CCS '25)
- [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/hash/eb113910e9c3f6242541c1652e30dfd6-Abstract-Conference.html) (NeurIPS '24)
- [FragFuse: Bypassing Access Control of Large Language Model Agents via Memory-Based Query Fragmentation and Fusion](https://www.usenix.org/conference/usenixsecurity26/presentation/rao) (USENIX Security '26)

#### Privacy Leakage

- [How Your Credentials Are Leaked by LLM Agent Skills: An Empirical Study](https://conf.researchr.org/details/ase-2026/ase-2026-research-track/43/How-Your-Credentials-Are-Leaked-by-LLM-Agent-Skills-An-Empirical-Study) (ASE '26)
- [Network-Level Prompt and Trait Leakage in Local Research Agents](https://www.usenix.org/conference/usenixsecurity26/presentation/jeong) (USENIX Security '26)
- [PrivAct: Internalizing Contextual Privacy Preservation via Multi-Agent Preference Training](https://proceedings.mlr.press/v306/cheng26o.html) (ICML '26; Poster)
- [PrivacyAsst: Safeguarding User Privacy in Tool-Using Large Language Model Agents](https://ieeexplore.ieee.org/abstract/document/10458329/) (IEEE TDSC '24)
- [PrivacyLens: Evaluating Privacy Norm Awareness of Language Models in Action](https://papers.nips.cc/paper_files/paper/2024/hash/a2a7e58309d5190082390ff10ff3b2b8-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '24)
- [AgentDAM: Privacy Leakage Evaluation for Autonomous Web Agents](https://proceedings.neurips.cc/paper_files/paper/2025/hash/c9826b9ea5e1b49b256329934a578d83-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '25; Poster)
- [Privacy in Action: Towards Realistic Privacy Mitigation and Evaluation for LLM-Powered Agents](https://aclanthology.org/2025.findings-emnlp.925/) (EMNLP Findings '25)
- [Agent Tools Orchestration Leaks More: Dataset, Benchmark, and Mitigation](https://aclanthology.org/2026.findings-emnlp.1293/) (EMNLP Findings '26)

### Agent Misuse and Red Teaming

Research on harmful task execution, offensive agents, automated red teaming, and defenses against malicious agents.

#### Harmful and Offensive Agents

- [Autonomy Comes with Costs: Detecting Denial-of-Service Vulnerabilities Caused by Resource Abusing in LLM-based Agents](https://www.usenix.org/conference/usenixsecurity26/presentation/luo) (USENIX Security '26)
- [AgentLAB: Benchmarking LLM Agents against Long-Horizon Attacks](https://proceedings.mlr.press/v306/jiang26as.html) (ICML '26; Poster)
- [Reliable Weak-to-Strong Monitoring of LLM Agents](https://openreview.net/pdf?id=WV7xIboTDK) (ICLR '26; Oral)
- [Monitoring Decomposition Attacks with Lightweight Sequential Monitors](https://proceedings.iclr.cc/paper_files/paper/2026/hash/2985777c8f2152664946ed30deb77291-Abstract-Conference.html) (ICLR '26; Poster)
- [Adaptive Attacks on Trusted Monitors Subvert AI Control Protocols](https://proceedings.iclr.cc/paper_files/paper/2026/hash/54b153ad8a138f4c186f21a8b7341d5e-Abstract-Conference.html) (ICLR '26; Poster)
- [AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/c493d23af93118975cdbc32cbe7323f5-Abstract-Conference.html) (ICLR '25; Poster)
- [Aligned LLMs Are Not Aligned Browser Agents](https://proceedings.iclr.cc/paper_files/paper/2025/hash/42f92b78a6695f60db0cd38b54d57a41-Abstract-Conference.html) (ICLR '25; Poster)
- [On the Resilience of LLM-Based Multi-Agent Collaboration with Faulty Agents](https://proceedings.mlr.press/v267/huang25ay.html) (ICML '25; Poster)
- [Cloak, Honey, Trap: Proactive Defenses Against LLM Agents](https://www.usenix.org/conference/usenixsecurity25/presentation/ayzenshteyn) (USENIX Security '25)
- [Security Challenges in AI Agent Deployment: Insights from a Large Scale Public Competition](https://proceedings.neurips.cc/paper_files/paper/2025/hash/73368bc7644c054b5bcc6490a8f2fb1c-Abstract-Datasets_and_Benchmarks_Track.html) (NeurIPS '25)

#### Jailbreaks, Backdoors, Collusion, and Reward Hacking

- [Architecture Matters for Multi-Agent Security](https://proceedings.mlr.press/v306/hagag26a.html) (ICML '26; Poster)
- [A2ASecBench: A Protocol-Aware Security Benchmark for Agent-to-Agent Multi-Agent Systems](https://openreview.net/pdf/cbf9372232d6c3383d426389d44c490277480d16.pdf) (ICLR '26; Poster)
- [Agent Smith: A Single Image Can Jailbreak One Million Multimodal LLM Agents Exponentially Fast](https://proceedings.mlr.press/v235/gu24e.html) (ICML '24)
- [Watch Out for Your Agents! Investigating Backdoor Threats to LLM-Based Agents](https://proceedings.neurips.cc/paper_files/paper/2024/hash/b6e9d6f4f3428cd5f3f9e9bbae2cab10-Abstract-Conference.html) (NeurIPS '24)
- [Secret Collusion among AI Agents: Multi-Agent Deception via Steganography](https://proceedings.neurips.cc/paper_files/paper/2024/hash/861f7dad098aec1c3560fb7add468d41-Abstract-Conference.html) (NeurIPS '24)
- [Feedback Loops With Language Models Drive In-Context Reward Hacking](https://proceedings.mlr.press/v235/pan24d.html) (ICML '24)

---

## Preprints

- [Defeating Prompt Injections by Design (CaMeL)](https://arxiv.org/abs/2503.18813)
- [CommandSans: Securing AI Agents with Surgical Precision Prompt Sanitization](https://arxiv.org/abs/2510.08829)
- [ToolTweak: An Attack on Tool Selection in LLM-based Agents](https://openreview.net/forum?id=dQXa5jvpQN)
- [Simple Prompt Injection Attacks Can Leak Personal Data Observed by LLM Agents During Task Execution](https://arxiv.org/abs/2506.01055)

---

## Contributing

Contributions are welcome. Please open an issue or pull request to:

- add a missing paper;
- correct a title, year, venue, or link;
- improve the topic taxonomy;
- suggest a new agent-security research direction.

Use the following entry format and prefer an official proceedings, publisher, ACL Anthology, OpenReview, or arXiv link:

    - [Paper Title](official-paper-url)

## License

The organization and documentation in this repository are licensed under [CC BY 4.0](LICENSE). Individual papers remain copyrighted by their authors and publishers.
