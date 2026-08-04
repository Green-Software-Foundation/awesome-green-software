# Green Software [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Research, tools, code, libraries, and training for building applications that emit less carbon into our atmosphere.

An [awesome list](https://awesome.re) created and managed by the [Open Source Working Group](https://directory.greensoftware.foundation/working-groups/software-wg/) in the [Green Software Foundation](https://greensoftware.foundation).

Every entry is a link with a one-line summary: what it does, and the number behind it where one exists. Tooling comes first, grouped by what it measures — AI workloads, a cloud provider, source code, an operating system, a website. Then the organizations doing the work, the courses and books to learn from, and the research the whole field rests on.

# Disclaimer

This list is created for informational purposes only and any links do not constitute an endorsement, recommendation, or favoring by the Green Software Foundation, its member organizations, or contributors to the list.

**THESE MATERIALS ARE PROVIDED "AS IS."** The parties expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk of implementing or otherwise using the materials is assumed by the implementer and user. **IN NO EVENT WILL THE PARTIES BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THIS DELIVERABLE OR ITS GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER MEMBER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.**

**Topics:** [AI](#ai--carbon) · [AWS](#cloud--aws) · [Azure](#cloud--azure) · [Google Cloud](#cloud--google) · [Multicloud](#cloud--multicloud) · [Source code](#code-based) · [Carbon-aware scheduling](#general-purpose--emissions) · [Energy monitoring](#general-purpose--energy) · [Linux](#os--linux) · [Mobile](#os--android) · [Websites](#web) · [Windows](#os--windows) · [Organizations](#organizations) · [Courses](#courses) · [Research](#research)

# ![Awesome](https://github.com/Green-Software-Foundation/awesome-green-software/blob/main/src/assets/fonts/GSF%20AGS%20Banner.png)

## Contents

- [Tooling](#tooling)
- [Organizations](#organizations)
- [Courses](#courses)
- [Articles](#articles)
- [Books](#books)
- [Research](#research)
- [Related Lists](#related-lists)
- [About the Directory](#about-the-directory)
- [Contributing](#contributing)

## Legend

Each entry ends with a kind badge: ![tool](https://img.shields.io/badge/tool-blue?style=flat-square) for software you can run, and a gray badge for ![paper](https://img.shields.io/badge/paper-555?style=flat-square), ![thesis](https://img.shields.io/badge/thesis-555?style=flat-square), ![report](https://img.shields.io/badge/report-555?style=flat-square), ![guide](https://img.shields.io/badge/guide-555?style=flat-square), ![book](https://img.shields.io/badge/book-555?style=flat-square), ![course](https://img.shields.io/badge/course-555?style=flat-square), ![video](https://img.shields.io/badge/video-555?style=flat-square), ![list](https://img.shields.io/badge/list-555?style=flat-square), ![org](https://img.shields.io/badge/org-555?style=flat-square) for organizations, and ![co](https://img.shields.io/badge/co-555?style=flat-square) for commercial products and vendor pages. Plain entries are articles. Entries marked **unmaintained** point at archived or abandoned projects kept for reference.

## Tooling

### AI — Carbon

- [1ClickImpact](https://1clickimpact.com) - A commercial API and platform for offsetting carbon emissions from AI workloads, with real-time tracking and Zapier integration for automated carbon accounting. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [AXIOMAX ESG Carbon Shield](https://github.com/axiomaxllc/esg-carbon-shield) - An MIT-licensed SDK for Python, Node.js, and Bash that signs AI inference calls with ed25519 and SHA-256 hash chains to produce auditable carbon attestations for CSRD and SEC reporting; calibration coefficients and keys remain server-side, and the project advertises a pending USPTO patent. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [ebb-ai](https://www.ebb-ai.com) - An Apache-2.0 MCP server exposing nine tools that defer non-urgent LLM jobs to the cleanest grid hour within a deadline across 31 regions, logging per-task carbon receipts to SQLite. ([source](https://github.com/Vitalini/ebb-ai)) ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Experiment Impact Tracker](https://github.com/Breakend/experiment-impact-tracker) - A Python library that calculates the carbon cost of a machine learning job; **unmaintained**, archived October 2025. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### AI — Energy

- [carbontracker](https://github.com/saintslab/carbontracker) - Tracks and predicts the energy consumption and carbon footprint of training deep learning models, as described in [Anthony et al. (2020)](https://arxiv.org/abs/2007.03051). ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [FedZero](https://github.com/dos-group/fedzero) - A federated learning system for zero-carbon distributed AI training, successor to Lowcarb, which won the GSF CarbonHack 2022. ([paper](https://arxiv.org/pdf/2305.15092)) ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [ML.ENERGY Leaderboard](https://ml.energy/leaderboard) - A public leaderboard from the ML.ENERGY Initiative showing time and energy consumption of generative AI models on GPU inference, covering LLMs, multimodal LLMs, and diffusion models. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Zeus](https://ml.energy/zeus) - An Apache-2.0 library for measuring and optimizing deep learning energy use across NVIDIA and AMD GPUs, Apple Silicon, Jetson, and CPU/DRAM, with power-limit and batch-size optimizers. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### Cloud — AWS

- [Customer Carbon Footprint Tool](https://aws.amazon.com/blogs/aws/new-customer-carbon-footprint-tool/) - A free AWS Billing console dashboard reporting Scope 1 and Scope 2 emissions in metric tons of CO2e by month, service, and geography, with a three-month data lag. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Green Cost Explorer](https://github.com/thegreenwebfoundation/green-cost-explorer) - A climate-related spend analysis for AWS from the Green Web Foundation; **unmaintained**, archived September 2023. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### Cloud — Azure

- [Azure Carbon Optimization](https://learn.microsoft.com/azure/carbon-optimization/) - Resource-level emissions detail plus recommendations to reduce them, available from within the Azure Portal. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Carbon Service REST API](https://learn.microsoft.com/rest/api/carbon/carbon-service) - Programmatic export of the data behind the Emissions Impact Dashboard and Azure Carbon Optimization. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Well-Architected Framework for Sustainable Workloads](https://learn.microsoft.com/azure/well-architected/sustainability/sustainability-get-started) - Microsoft's guidance on designing an Azure workload following Green Software Foundation best practices. ![guide](https://img.shields.io/badge/guide-555?style=flat-square)

### Cloud — Google

- [Carbon Footprint](https://cloud.google.com/carbon-footprint) - A free console dashboard reporting Scope 1, 2, and 3 emissions per project, service, region, and month, with dual location- and market-based Scope 2 accounting and BigQuery export. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Cloud Jewels](https://github.com/etsy/cloud-jewels) - An MIT-licensed set of energy-estimation coefficients and scripts converting GCP billing data into trailing 30-day kWh estimates for CPU, GPU, memory, storage, and network; **unmaintained** since 2020. ([blog post](https://www.etsy.com/codeascraft/cloud-jewels-estimating-kwh-in-the-cloud)) ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### Cloud — OVHcloud

- [OVHcloud Carbon Calculator](https://www.ovhcloud.com/sites/default/files/external_files/ovh-calculatrice-onepager.pdf) - A customer-facing calculator estimating monthly and yearly greenhouse gas emissions from manufacturing, use, and other indirect phases, covering over 300,000 bare metal servers outside the USA. ![co](https://img.shields.io/badge/co-555?style=flat-square)

### Cloud — Multicloud

- [Carbonifer](https://github.com/carboniferio/carbonifer) - A command line tool to estimate and control the carbon emissions of cloud infrastructure before it is provisioned. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/) - An open-source cloud energy and carbon emissions measurement tool spanning AWS, Azure, and GCP. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Green Metrics Tool](https://www.green-coding.io/projects/green-metrics-tool/) - A free open-source tool to measure the energy and CO2 consumption of a software architecture. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [kube-green](https://github.com/kube-green/kube-green) - An open-source Kubernetes addon that automatically shuts down selected resources when you do not need them. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### Code-Based

- [1ClickImpact Sustainability API](https://docs.1clickimpact.com/) - A RESTful API for integrating environmental actions such as tree planting, carbon capture, and ocean cleanup into software and workflows. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [carbon-text](https://github.com/ShayokhShorfuddin/carbon-text) - A syntax highlighter and snippets extension for [carbon.txt](https://carbontxt.org/) files. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [CarbonLint](https://github.com/nishal21/CarbonLint) - An MIT-licensed Tauri/Rust desktop app and npm CLI that tracks CPU, memory, disk, network, and GPU use, converts it to CO2 via regional grid intensity, and scores projects 0-100. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [CAST Highlight](https://learn.castsoftware.com/green-software/) - Automated source code analysis that identifies green deficiencies and tracks improvement across an application portfolio. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [codecarbon.io](https://codecarbon.io/) - A Python library that tracks and helps reduce the CO2 emissions of your computing. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Creedengo (formerly ecoCode)](https://github.com/green-code-initiative/creedengo-rules-specifications) - SonarQube plugins for PHP, Python, Java, JavaScript, and more, providing static analyzers that highlight code structures with a negative ecological impact. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [energy-consumption-measuring-toolkit](https://github.com/Accenture/energy-consumption-measuring-toolkit) - Accenture's RAPL-based toolkit for measuring the energy consumption of Python applications. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Green CodeQL](https://github.com/green-code-initiative/green-codeql-queries) - A GPL-3.0 collection of custom CodeQL queries flagging energy-related sustainability issues across six packs covering Java/Kotlin, Python, C/C++, JavaScript, C#, and GitHub Actions. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [JoularJX](https://github.com/joular/joularjx) - Java software power monitoring at the source code level, in real time. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Kernel Tuner](https://github.com/KernelTuner/kernel_tuner) - An auto-tuner capable of [optimizing GPU code for energy efficiency](https://github.com/KernelTuner/kernel_tuner/blob/master/examples/cuda/going_green_performance_model.py). ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [oaklean.io](https://oaklean.io/) - A VS Code extension and test-framework integration that visualizes JavaScript and TypeScript energy consumption, identifies energy-intensive code sections, and suggests alternatives. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Tracarbon](https://github.com/fvaleye/tracarbon) - Tracks a device's energy consumption and calculates carbon emissions using your location. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### General Purpose — Emissions

- [Carbon AppInsights](https://github.com/cloudyspells/carbon-appinsights) - An Azure Functions solution logging Electricity Maps emissions data for Azure regions into Azure Monitor for alerting triggers and automated actions. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Carbon Aware Computing — Tools and Free Forecast Data](https://github.com/bluehands/Carbon-Aware-Computing) - A NuGet package, PowerShell cmdlets, and a live SDK instance, plus an open carbon forecast for Europe in the Carbon Aware SDK's JSON format. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Carbon Aware Computing Hangfire Extension](https://github.com/bluehands/Hangfire.Community.CarbonAwareExecution) - A Hangfire extension that schedules tasks into the window of minimal grid carbon intensity, based on emission forecasts. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Carbon Aware SDK](https://github.com/Green-Software-Foundation/carbon-aware-sdk) - A Web API and command line for unified forecast and historical power grid emissions data by location and time, to help build carbon-aware software. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [GreenScheduled](https://github.com/carbonintensityio/green-scheduler) - An Apache-2.0 Java library adding a `@GreenScheduled` annotation for Spring Boot and Quarkus that shifts jobs to the lowest-carbon hour in a window using the carbonintensity.io API. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [PSElectricityMaps](https://github.com/cloudyspells/PSElectricityMaps) - A PowerShell module for retrieving current power grid carbon emissions data with a free Electricity Maps or CO2signal account. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [PSWattTime](https://github.com/cloudyspells/PSWattTime) - A PowerShell module for retrieving current power grid carbon emissions data with a free WattTime.org account. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### General Purpose — Energy

- [CEEMS](https://ceems-dev.github.io/ceems/) - The Compute Energy and Emissions Monitoring Stack: energy and equivalent emissions alongside performance, I/O, and network metrics for SLURM, OpenStack, and Kubernetes workloads. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [CO2Scope](https://www.easyvirt.com/en/co2scope-reduce-the-carbon-footprint-of-it-services/) - A commercial solution monitoring the real-time CO2 emissions of IT services, virtual machines, and servers. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Eco-CI](https://github.com/green-coding-solutions/eco-ci-energy-estimation) - A plugin for GitHub Actions and GitLab that measures CI runs and estimates their energy use. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Energy Rebate Calculator](https://energyrebatecalculator.com/) - A consumer-facing US home energy rebate finder covering HOMES and HEAR programs, heat pumps, and insulation tax credits. *Flagged for review: unrelated to green software engineering.* ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Kepler](https://github.com/sustainable-computing-io/kepler) - The Kubernetes-based Efficient Power Level Exporter uses eBPF to probe energy-related system stats and exports them as Prometheus metrics. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [PowerJoular](https://github.com/joular/powerjoular) - Monitors the power consumption of software and hardware components in real time. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [scaphandre](https://github.com/hubblo-org/scaphandre) - Power measurement for bare metal hosts, Prometheus, and workloads inside Docker containers. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Vessim](https://vessim.readthedocs.io/en/latest/) - A co-simulation testbed for carbon-aware applications, connecting renewable generation and energy storage simulators to real software and hardware; published at HotCarbon'24. ([source](https://github.com/dos-group/vessim)) ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### General Purpose — Extensions

- [Globemallow.io](https://globemallow.io/) - A browser extension producing sustainable web development and design best-practice reports, with an analytics and ad blocker that reduces page-load energy. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [GreenIT-Analysis](https://github.com/cnumr/GreenIT-Analysis) - A DevTools extension measuring a website's ecoIndex and verifying the web eco-design best practices defined by the Collectif Numérique Responsable. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [WeDeex](https://chromewebstore.google.com/detail/wedeex/ojlagggckhpedblhemgjhecbggnibale) - A Chrome extension estimating the CO2 emissions of web browsing locally from transferred data volume and ranking the five most data-heavy sites; **unmaintained**, last updated 2021. Also on [Edge](https://microsoftedge.microsoft.com/addons/detail/wedeex/jbocoolinibenmobjadejejdbanalfee). ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### OS — Android

- [PowDroid](https://github.com/powdroid-project/powdroid) - A GPL-3.0 off-device Android energy profiler, written in Go and Python, deriving energy metrics from a device trace via CLI or GUI. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### OS — iOS

- [creedengo-ios](https://github.com/green-code-initiative/creedengo-ios) - A SonarQube plugin highlighting code structures in iOS projects that may have a negative ecological impact. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### OS — Linux

- [FreeIPMI](https://www.gnu.org/software/freeipmi/) - Reads the power consumption of a bare metal machine through DCMI, the IPMI extension. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [ipmitool](https://github.com/ipmitool/ipmitool) - Reads the power consumption of a bare metal machine through DCMI, the IPMI extension. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [PowerAPI](https://powerapi.org) - A Linux software-defined power meter estimating process-scale power consumption in real time. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [PowerTOP](https://github.com/fenrus75/powertop) - A Linux tool to diagnose issues with power consumption and power management. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [turbostress](https://github.com/teads/turbostress) - Generates load on a machine and outputs the computer's power metrics for that load. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### OS — Windows

- [powercfg](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options) - A built-in Windows command line tool whose `/energy`, `/batteryreport`, and `/sleepstudy` switches produce HTML or XML reports on energy-efficiency problems, battery wear, and modern-standby quality. ([blog post](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/)) ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [WedeexApp](https://github.com/Wedeex-DevTeam/WedeexApp) - An MIT-licensed UWP sample app in C# demonstrating the Wedeex API by showing real-time French grid CO2 intensity and Microsoft Surface power draw. ([blog post](https://devblogs.microsoft.com/sustainable-software/we-need-a-yuka-for-electricity-to-ease-the-energy-transition/)) ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### Web

- [Beacon](https://digitalbeacon.co/) - Calculates the environmental impact of a single web page. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Carbon Footprint of Sending Data](https://observablehq.com/@mrchrisadams/carbon-footprint-of-sending-data-around) - An online calculator estimating carbon emissions from network traffic, based on The Shift Project's Lean ICT report. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Carbonara](https://github.com/digital4better/carbonara/) - A custom element from Digital4Better that displays the carbon footprint of web navigation. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [CO2.js](https://github.com/thegreenwebfoundation/co2.js/) - An npm module for accessing the Green Web API and estimating the carbon emissions of digital services. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [ec0lint](https://github.com/ec0lint/ec0lint) - A static code analysis tool providing hints for reducing the carbon footprint of websites. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [EcoGrader.com](https://ecograder.com/) - An online website carbon estimator. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [ecoIndex](https://www.ecoindex.fr/) - Estimates the carbon footprint of public websites and pages; interface in French. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Fruggr](https://www.fruggr.io) - Evaluates the environmental and social efficiency of web and mobile applications. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [GreenFrame.io](https://greenframe.io) - Calculates the carbon footprint of a website from a full user scenario rather than a single page load. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Kastor.green](https://kastor.green/) - Evaluates the ecodesign compliance of websites and web applications against the GR491 standard. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [webNRG](https://website-tester.green-coding.io) - A hosted website tester from Green Coding Solutions measuring browser rendering energy alongside network-transfer emissions, reporting CO2 for a typical 10,000 monthly visitors. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)
- [Website Carbon Calculator](https://www.websitecarbon.com/) - An online website carbon estimator giving a per-pageview figure and a letter grade. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

## Organizations

- [Climate Action Tech](https://climateaction.tech) - A Slack-based community of practice with over 10,000 tech workers driving climate action through green software, sustainable product design, and low-carbon infrastructure. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Climate Change AI](https://www.climatechange.ai/) - A global nonprofit catalyzing work at the intersection of machine learning and climate change through workshops at NeurIPS and ICLR, summer schools, and innovation grants. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Digital Emissions](https://www.digitalemissions.org) - A US 501(c)(3) nonprofit focused on responsible, green, and ethical AI, publishing educational resources, digital carbon footprint simulators, and a sustainability learning platform. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Green Code Initiative](https://green-code-initiative.org) - A France-based open-source community of 36 repositories maintaining Creedengo, a set of SonarQube plugins flagging eco-design rule violations in Java, Python, and PHP. ([GitHub](https://github.com/green-code-initiative)) ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Green Software Design](https://www.greensoftwaredesign.com/en/) - A German association, Bundesverband Green Software e.V., uniting companies and research institutes, offering the Green Software Expertyzer assessment tool and a Green Software Design certification label. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Green Software Foundation](https://greensoftware.foundation) - A Linux Foundation-affiliated nonprofit of over 100 member organizations publishing green software standards, including the ISO-certified Software Carbon Intensity specification, plus free practitioner training. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Roll the Cloud](https://rtc.eco/) - A US 501(c)(3) nonprofit building low-carbon software tools, plus community gardens and awareness apparel about technology's environmental footprint. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [SustainableIT.org](https://www.sustainableIT.org) - A 501(c)(6) trade association of 70+ member organizations led by technology executives, publishing IT sustainability standards covering 240 ESG topics and metrics. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [Team for the Planet](https://team-planet.com/) - A French nonprofit with 133,000 shareholders that has raised €41 million to create and fund companies deploying climate innovations, with 14 deployed so far. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [The Green Grid](https://www.thegreengrid.org/) - An ITI-affiliated industry association founded in 2007 that develops data centre efficiency metrics such as Water Usage Impact and Data Center Resource Effectiveness. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [The Green Web Foundation](https://www.thegreenwebfoundation.org/) - An independent nonprofit in Amsterdam and Berlin working toward a fossil-free internet by 2030, maintaining a green hosting dataset, CO2.js, and carbon.txt. ![org](https://img.shields.io/badge/org-555?style=flat-square)
- [The Shift Project](https://theshiftproject.org/en/publications/lean-ict/) - A French think tank whose Lean ICT project produced the widely cited report on digital sobriety and the energy footprint of information technology. ![org](https://img.shields.io/badge/org-555?style=flat-square)

## Courses

- [Curso de Desarrollo de software medioambientalmente sostenible](https://www.adrformacion.com/cursos/greensoft/greensoft.html) - A paid 20-hour online Spanish-language course from ADR Formación covering data-centre footprints, green coding, carbon measurement, and nine practical exercises. ![course](https://img.shields.io/badge/course-555?style=flat-square)
- [Harvard ENVR S-186: Enabling a Sustainable Digital Transformation](https://coursebrowser.dce.harvard.edu/course/enabling-a-sustainable-digital-transformation/) - A course taught online, covering digital carbon footprints, sustainable digital transformation, and digital justice. ![course](https://img.shields.io/badge/course-555?style=flat-square)
- [MOOC Numérique Responsable](https://gridboy.github.io/MOOC-Numerique-Responsable/) - A free, CC0-licensed catalogue aggregating French-language courses on responsible digital practices, green IT, and responsible AI. ![course](https://img.shields.io/badge/course-555?style=flat-square)
- [Sustainable Software Engineering by openHPI](https://open.hpi.de/courses/sustainablesoftware2022) - A free two-week self-paced MOOC from the Hasso Plattner Institute on resource-efficient software development, aimed at developers and architects. ![course](https://img.shields.io/badge/course-555?style=flat-square)
- [The Principles of Sustainable Software Engineering](https://learn.microsoft.com/training/modules/sustainable-software-engineering-overview/) - Microsoft's free beginner-level Learn module covering the six principles of sustainable software engineering across ten self-paced units with an assessment. ![course](https://img.shields.io/badge/course-555?style=flat-square)

## Articles

- [Assessing the suitability of the Greenhouse Gas Protocol for calculation of emissions from public cloud computing workloads](https://link.springer.com/article/10.1186/s13677-020-00185-8) - Concludes cloud customers cannot apply the GHG Protocol's ICT guidance because AWS, Azure, and GCP withhold PUE, server counts, and utilisation data. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Beyond Single-Dimensional Metrics for Digital Sustainability](https://branch.climateaction.tech/issues/issue-3/beyond-single-dimensional-metrics-for-digital-sustainability/) - Argues single metrics invite Goodhart's-law gaming, showing how halving server draw from 50W to 25W paradoxically worsened PUE from 2.0 to 3.0.
- [Complete Guide to Carbon Offsetting: APIs and Shopify App](https://1clickimpact.com/blog/carbon-offsetting-apis-shopify-app-guide) - A vendor guide pitching 1ClickImpact's own offsetting API and Shopify app, quoting $0.40 per tree or pound of carbon captured. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [Estimating the marginal carbon intensity of electricity with machine learning](https://www.electricitymaps.com/resources/publications/estimating-the-marginal-carbon-intensity-of-electricity-with-machine-learning) - Electricity Maps trained on 1,000+ grid variables and put Eastern Denmark's marginal intensity near 700 gCO2eq/kWh, though it has since withdrawn marginal signals as too limited.
- [How to incorporate carbon-free energy for Google Cloud regions](https://cloud.google.com/sustainability/region-carbon) - Google's per-region table of hourly carbon-free-energy share and grid intensity, from Stockholm's 100% CFE and 3 gCO2eq/kWh down to 1% in Hong Kong and Doha. ![co](https://img.shields.io/badge/co-555?style=flat-square)
- [How we're making Dropbox data centers 100% carbon neutral](https://dropbox.tech/infrastructure/making-dropbox-data-centers-carbon-neutral) - Dropbox's engineering blog details a 15% data-centre footprint cut in 18 months via PUE 17% below industry average and HDD standby saving 50% on storage hosts.
- [Joule Wars: the AI race for useful intelligence per joule](https://piszczek.pl/joule-wars) - Argues electricity, not model architecture, is AI's binding constraint, so competition shifts to useful intelligence per joule, hardest in robots limited to 1-3 kWh batteries.
- [Power consumption of JPEG, WebP, and AVIF](https://fershad.com/writing/power-consumption-jpeg-webp-and-avif) - Firefox power-profiler tests on Apple Silicon found WebP cheapest at roughly 100-106 µWh per page load while AVIF cost 133-137 µWh, on admittedly small samples.
- [RAPL in Action: Experiences in Using RAPL for Power Measurements](https://www.researchgate.net/publication/322308215_RAPL_in_Action_Experiences_in_Using_RAPL_for_Power_Measurements) - Validates Intel's RAPL counters against wall power at 0.99 correlation on Haswell, with 1.7% MAPE for full-system power modelling and under 1% overhead. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Software Carbon Intensity (SCI): Crafting A Standard](https://greensoftware.foundation/articles/software-carbon-intensity-crafting-a-standard) - Explains why the SCI metric deliberately excludes market-based offsets and infrastructure measures, scoring consequentially to reward efficiency rather than procurement.
- [The Staggering Ecological Impacts of Computation and the Cloud](https://thereader.mitpress.mit.edu/the-staggering-ecological-impacts-of-computation-and-the-cloud/) - An MIT Press essay quantifying the cloud's materiality: 200 TWh yearly, 0.3% of global emissions, and seven million gallons of water daily at the NSA's Utah facility.
- [What are the greenest programming languages?](https://medium.com/codex/what-are-the-greenest-programming-languages-e738774b1957) - Relays the 2017 Portuguese study benchmarking energy use across 27 popular programming languages, arguing its rankings still held after a 2021 update.
- [What Do We Need To Build More Sustainable AI Systems?](https://greensoftware.foundation/articles/what-do-we-need-to-build-more-sustainable-ai-systems) - Prescribes four fixes: better grid data, measurement standards with independent certification, workflow-native tooling, and carbon accounting taught in curricula.
- [Why Should Sustainability Be A First-Class Consideration For AI Systems?](https://greensoftware.foundation/articles/why-should-sustainability-be-a-first-class-consideration-for-ai-systems) - Notes MLCommons submissions reporting energy consumption fell by about 50%, and ties large-model scaling to exploitative data collection and concentration of compute power.

## Books

- [101 Green Software: A Practical Guide for Developers & Architects](https://www.amazon.com/dp/B0BPPF82H9) - Ioannis Kolaxis's short self-published guide with practical guidelines for reducing the resources used by data centres, networks, and end-user devices. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Building Green Software: A Sustainable Approach to Software Development and Operations](https://www.oreilly.com/library/view/building-green-software/9781098150617/) - An O'Reilly book by Anne Currie, Sarah Hsu, and Sara Bergman on carbon awareness, code and hardware efficiency, and operating greener cloud systems. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Designing for Sustainability: A Guide to Building Greener Digital Products and Services](https://www.amazon.co.uk/dp/1491935774) - Tim Frick's O'Reilly book presenting a sustainability framework for digital products spanning content strategy, performance, user experience, and green hosting. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Empowering Green Initiatives with IT: A Strategy and Implementation Guide](https://www.amazon.co.uk/dp/0470587520) - Carl H. Speshock's Wiley guide to aligning IT departments and tooling with corporate green initiatives, sustainability reporting, and environmental management systems. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Green IT For Dummies](https://www.amazon.co.uk/dp/0470386886) - Carol Baroudi and co-authors' Wiley introduction to energy audits, data-centre efficiency, equipment lifespan, and organisation-wide green IT programmes. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Green Software Essentials: A Q&A Guide for Practitioners](https://www.amazon.com/dp/B0CNPZ3465) - A question-and-answer primer by Sanjay Podder and Navveen Balani introducing green software concepts and practices for engineering practitioners. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [GreenOps & GreenCoding: Practical Approaches for Sustainable Software](https://greenops.fabiocicerchia.it/) - A free early-release ebook by Fabio Cicerchia covering energy-efficient code, GreenOps for cloud and DevOps, and lifecycle thinking across thirteen chapters. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Sustainable IT Playbook for Technology Leaders](https://www.amazon.co.uk/dp/1803230347) - Niklas Sundberg's Packt playbook on sustainable IT strategy, carbon accounting, data-centre efficiency, and circular economy, with corporate case studies. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [Sustainable Web Design](https://www.goodreads.com/en/book/show/56861271-sustainable-web-design) - Tom Greenwood's A Book Apart title on measuring and reducing website carbon emissions through design, code, and hosting choices. ![book](https://img.shields.io/badge/book-555?style=flat-square)
- [The Green IT Guide](https://www.oreilly.com/library/view/the-green-it/9781484280577/) - Mike Halsey's Apress guide to ten steps toward carbon-neutral IT infrastructure, covering power management, cloud provider policies, and e-waste reduction. ![book](https://img.shields.io/badge/book-555?style=flat-square)

## Research

### Artificial Intelligence

- [Carbon-Neutralized Task Scheduling for Green Computing Networks](https://arxiv.org/abs/2209.02198) - A carbon-intensity-aware scheduling policy built on Lyapunov drift-plus-penalty optimization cut cumulative emissions from AI training tasks by 54% versus queue-length-based scheduling. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Chasing Low-Carbon Electricity for Practical and Sustainable DNN Training](https://www.climatechange.ai/papers/iclr2023/29) - Chase throttles GPU energy in response to real-time grid carbon intensity, cutting ResNet-50/ImageNet training emissions 13.6% for a 2.5% training-time increase. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Climate Change and AI: Recommendations for Government Action](https://www.gpai.ai/projects/climate-change-and-ai.pdf) - Offers governments recommendations across three fronts — enabling climate-beneficial AI, curbing AI's own emissions, and building governance capacity — while warning against techno-solutionism. ![report](https://img.shields.io/badge/report-555?style=flat-square)
- [Counting Carbon: A Survey of Factors Influencing the Emissions of Machine Learning](https://arxiv.org/abs/2302.08476) - Analysis of 95 NLP and computer-vision models relates emissions to energy source, training time, and task performance, and proposes a central emissions repository. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Efficiency is Not Enough: A Critical Perspective of Environmentally Sustainable AI](https://arxiv.org/abs/2309.02065) - Argues compute efficiency does not reliably translate into energy or carbon savings and can paradoxically raise lifecycle emissions, urging systems-level thinking. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/abs/1906.02243) - Training a Transformer with neural architecture search emits an estimated 626,155 lbs CO2e, roughly five cars' lifetime emissions, versus 1,438 lbs for BERT base on GPUs. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Energy-Efficient AI | Vivienne Sze | TEDxMIT](https://www.youtube.com/watch?v=Y0XGSnRrWiU) - Sze argues moving AI inference from cloud data centers onto phones and robots improves privacy, latency, and resilience, making power consumption the field's central engineering constraint. ![video](https://img.shields.io/badge/video-555?style=flat-square)
- [Exploring the Carbon Footprint of Hugging Face's ML Models: A Repository Mining Study](https://arxiv.org/abs/2305.11164) - Mining 1,417 Hugging Face models shows carbon reporting has stalled, reported footprints dipped slightly over two years, and emissions correlate with model and dataset size. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Good News About the Carbon Footprint of Machine Learning Training](https://research.google/blog/good-news-about-the-carbon-footprint-of-machine-learning-training/) - Google's 4Ms — efficient model, machine, mechanization, and map optimization — cut Transformer training's carbon footprint 747x in four years; ML is 10-15% of company energy use. ![report](https://img.shields.io/badge/report-555?style=flat-square)
- [How to estimate carbon footprint when training deep learning models? A guide and review](https://arxiv.org/abs/2306.08323) - Compares available energy-tracking tools by measuring two image-processing networks on different servers, then advises practitioners on selecting the right tool and infrastructure. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Measuring the Carbon Intensity of AI in Cloud Instances](https://arxiv.org/abs/2206.05229) - Measuring Azure workloads up to a 6.1-billion-parameter language model, the authors find region choice yields the largest operational emissions reduction, ahead of time-shifting or pausing. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Quantifying the Carbon Emissions of Machine Learning](https://arxiv.org/abs/1910.09700) - Introduces the ML Emissions Calculator, showing training footprint depends chiefly on server location and grid mix, training duration, and hardware model. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [SECure: A Social and Environmental Certificate for AI Systems](https://arxiv.org/abs/2006.06217) - Proposes an ESG-style certification with four pillars — compute efficiency, on-device distributed learning, data privacy, and standardized eco-social reporting. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [The AI Gambit — Leveraging Artificial Intelligence to Combat Climate Change](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3804983) - Offers 13 policy recommendations, arguing AI's climate benefits are a gambit whose payoff may be offset by the technology's own greenhouse gas emissions. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [The Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink](https://www.techrxiv.org/articles/preprint/The_Carbon_Footprint_of_Machine_Learning_Training_Will_Plateau_Then_Shrink/19139645/1) - Claims best practices can cut training energy 100x and emissions 1000x, that prior studies overestimated footprints by up to 100,000x, and total emissions should decline by 2030. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [The Imperative for Sustainable AI Systems](https://thegradient.pub/sustainable-ai/) - Notes high-compute AI's electricity demand doubles every 3.4 months and up to 30x regional carbon-intensity gaps, urging compression, federated deployment, and carbon-aware scheduling. ![report](https://img.shields.io/badge/report-555?style=flat-square)
- [The Two Faces of AI in Green Mobile Computing: A Literature Review](https://arxiv.org/abs/2308.04436) - Across 34 papers, 94% propose solutions but rarely release code, and AI's own energy cost as a mobile component is far less studied than AI for efficiency. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Towards Environmentally Equitable AI via Geographical Load Balancing](https://arxiv.org/abs/2307.05494) - Shows conventional geographical load balancing worsens regional environmental inequity, while an equity-aware alternative narrows carbon and water footprint disparities across ten simulated data centers. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Unraveling the hidden environmental impacts of AI solutions for the environment](https://arxiv.org/abs/2110.11822) - Argues no prior work assesses the full net environmental impact of AI-for-Green applications beyond greenhouse gases, and proposes lifecycle assessment to detect burden shifting. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Zeus: Understanding and Optimizing GPU Energy Consumption of DNN Training](https://www.usenix.org/conference/nsdi23/presentation/you) - Zeus automatically tunes job- and GPU-level knobs to navigate the energy-performance tradeoff, improving DNN training energy efficiency 15.3% to 75.8% without offline profiling. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

### Blockchain

- [An Analysis of Energy Consumption and Carbon Footprints of Cryptocurrencies and Possible Solutions](https://arxiv.org/abs/2203.03717) - Compiling 2018-2021 estimates, it reports Bitcoin consuming roughly 26-177 TWh and emitting 64.18 MtCO2 annually as of July 2021, comparable to Greece. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Confronting the Carbon-footprint Challenge of Blockchain](https://arxiv.org/abs/2201.06929) - Argues that switching consensus from Proof of Work to Proof of Stake could virtually eliminate blockchain electricity demand, projecting energy and emissions for Bitcoin and Ethereum. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Ethereum Emissions: A Bottom-up Estimate](https://arxiv.org/abs/2112.01238) - Replaces prior top-down economic estimates with a bottom-up method deriving energy from hashrate and emissions factors from mining locations across Ethereum's proof-of-work history. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

### Computation

- [A Comparative Study of Methods for Measurement of Energy of Computing](https://www.mdpi.com/1996-1073/12/11/2204) - Against external power meters, on-chip sensors show dynamic-energy errors averaging 73% (maximum 300%) and predictive models 32%, with optimization losses reaching 84%. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [An experiment-driven energy consumption model for virtual machine management systems](https://hal.science/hal-01632962) ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [EnergiBridge: Empowering Software Sustainability through Cross-Platform Energy Measurement](https://arxiv.org/abs/2312.13897) - Introduces an open-source energy measurement utility spanning Linux, Windows, and macOS with Intel, AMD, and Apple ARM support, lowering barriers to reproducible green-software research. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Going Green: Optimizing GPUs for Energy Efficiency Through Model-steered Auto-tuning](https://arxiv.org/abs/2211.07260) - Adds energy monitoring to the Kernel Tuner auto-tuner and uses a GPU power model predicting energy-efficient clock frequencies to shrink the tuning search space substantially. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Green Algorithms: Quantifying the Carbon Emissions of Computation](https://arxiv.org/abs/2007.07610) - Presents a standardised framework and free online tool estimating a computation's CO2e from runtime, hardware, and facility location, applied to physics, weather, and NLP workloads. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Green-aware Mobile Edge Computing for IoT: Challenges, Solutions, and Future Directions](https://arxiv.org/abs/2009.03598) - Surveys energy challenges in mobile edge computing for IoT, presenting a green-aware framework, a generic optimization model, and a comparison of workload offloading approaches. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Let's Wait Awhile: How Temporal Workload Shifting Can Reduce Carbon Emissions in the Cloud](https://arxiv.org/abs/2110.13234) - Characterizing delay-tolerant workloads, it quantifies emission savings from shifting them to low-carbon hours across Germany, Great Britain, France, and California during 2020. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Measuring IT Carbon Footprint: What is the Current Status Actually?](https://arxiv.org/abs/2306.10049) - Groups IT emissions measurement obstacles into four categories — software energy, server overhead, energy mix, and embodied carbon — and offers a CPU-based estimation framework. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

### Crypto

- [Accounting for carbon emissions caused by cryptocurrency and token systems](https://arxiv.org/abs/2111.06477) - Compares candidate allocation approaches and proposes a framework combining key emission drivers in Proof-of-Work and Proof-of-Stake networks to attribute emissions to investors. ![report](https://img.shields.io/badge/report-555?style=flat-square)

### Data Centers

- [Architectural Tactics to Optimize Software for Energy Efficiency in the Public Cloud](https://github.com/so-vos/thesis/blob/main/Thesis_Vos_2021.pdf) - Interviews with 17 practitioners produced a reusable model of architectural tactics for cloud energy efficiency, though provider opacity still prevents straightforward energy-aware design decisions. ![thesis](https://img.shields.io/badge/thesis-555?style=flat-square)
- [Balancing Power Systems with Datacenters Using a Virtual Interconnector](https://ieeexplore.ieee.org/document/7452537) ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Carbon-Aware Computing for Datacenters](https://arxiv.org/abs/2106.11750) - Google's production system uses day-ahead carbon-intensity forecasts and Virtual Capacity Curves to delay temporally flexible workloads into greener hours while preserving daily fleet capacity. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Hiding Greenhouse Gas Emissions in the Cloud](https://www.nature.com/articles/s41558-020-0837-6) - Moving IT to the cloud shifts emissions out of Scope 1 and 2 into Scope 3, letting firms obscure footprints as cloud spending reached $288 billion in 2019. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Power consumption and efficiency of cooling in a Data Center](https://ieeexplore.ieee.org/document/5697800) - Roughly half of CRAC airflow bypassed the racks; adding front covers to direct airflow raised cooling efficiency from 1.9 to 12.9. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Quantifying the Benefits of Carbon-Aware Temporal and Spatial Workload Shifting in the Cloud](https://arxiv.org/abs/2306.06502) - Across carbon-intensity data from 123 cloud regions, practical spatiotemporal shifting gains are limited, simple policies capture most of them, and benefits shrink as grids decarbonize. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Supporting energy-awareness for cloud users](https://hal.science/tel-01973083) ![thesis](https://img.shields.io/badge/thesis-555?style=flat-square)
- [The Case for Energy-Proportional Computing](https://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/33387.pdf) - Servers spend most time at 10-50% utilization where efficiency is under half of peak; energy-proportional hardware could cut datacenter energy use roughly 50%. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [The Dirty Secret of SSDs: Embodied Carbon](https://arxiv.org/abs/2207.10793) - Flash manufacturing emits about 0.16 kg CO2 per gigabyte, so embodied carbon dominates SSD footprints, with storage device production totalling 20 Mt CO2 in 2021. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Treehouse: A Case For Carbon-Aware Datacenter Software](https://arxiv.org/abs/2201.02120) - Proposes exposing fine-grained energy and carbon metrics to developers and raising programming abstractions so datacenter software can trade performance against emissions. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Verifiable Sustainability in Data Centers](https://arxiv.org/abs/2307.11993) - Argues existing pipelines for collecting, aggregating, and reporting data center sustainability data are vulnerable to cyberattack and misuse, requiring privacy-preserving verifiable alternatives. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

### Emissions

- [Methodological Guide - Bilan Carbone (French)](https://www.associationbilancarbone.fr/wp-content/uploads/2018/03/bilan-carbone-v8-guide-methodologique-final.pdf) - Defines the six-step Bilan Carbone v8 procedure for organizational greenhouse gas inventories, boundary setting, emission factors, and reduction action plans, aligned with ISO 14064-1. ![guide](https://img.shields.io/badge/guide-555?style=flat-square)
- [Putting a CO2 figure on a piece of computation](https://ieeexplore.ieee.org/document/6128960) ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [The energy and carbon footprint of the ICT and E&M sector in Sweden 1990-2015 and beyond](https://download.atlantis-press.com/article/25860385.pdf) - Swedish ICT and entertainment/media energy footprints fell about 10% between 2010 and 2015, to 4.1 and 2.8 TWh, despite exponentially growing data traffic. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [The Most Important GHG Accounting Concept You May Not Have Heard of: The Attributional Consequential Distinction](https://ghginstitute.org/2021/04/21/the-most-important-ghg-accounting-concept-you-may-not-have-heard-of-the-attributional-consequential-distinction/) - Conflating attributional inventory methods with consequential decision analysis drives bad decisions; both are needed, but each only for its appropriate purpose. ![guide](https://img.shields.io/badge/guide-555?style=flat-square)
- [Tracking emissions in the US electricity system](https://www.pnas.org/doi/10.1073/pnas.1912950116) - Hourly consumption-based accounting across 66 US balancing authorities shows 40% of emissions tied to California's main grid occur outside the state. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

### Programming Languages

- [Energy Efficiency Across Programming Languages](https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf) - Benchmarks ranked C most energy-efficient, with interpreted languages averaging 2,365J versus 120J for compiled languages, and found faster languages are not always greener. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [GreenC5: An Adaptive, Energy-Aware Collection for Green Software Development](https://digitalcommons.du.edu/cgi/viewcontent.cgi?article=2122&context=etd) - A machine-learning-driven adaptive collection identifies energy-efficient data structures with 95.8% accuracy, yielding median energy savings above 60% and ranging from 18% to 95%. ![thesis](https://img.shields.io/badge/thesis-555?style=flat-square)

### Software Engineering Practice

- [Google Apps: Energy Efficiency in the Cloud](https://static.googleusercontent.com/media/www.google.com/en//green/pdf/google-apps.pdf) - A typical company switching to cloud-hosted office apps saves an estimated 68-87% of office computing energy; GSA's migration cut server energy nearly 90%. ![report](https://img.shields.io/badge/report-555?style=flat-square)
- [Green and Sustainability in Software Development Lifecycle Process](https://www.intechopen.com/chapters/69865) - Reviews the GREENSOFT model and proposes a five-phase Green IT Star approach embedding sustainability across all lifecycle stages rather than only development and end-of-life. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Software development methodology in a Green IT environment](https://hal.science/tel-01724069) - Acar defines per-stage sustainability criteria and builds TEEC, a tool estimating whole-machine energy across CPU, memory, disk, and network to locate source-code energy hotspots. ![thesis](https://img.shields.io/badge/thesis-555?style=flat-square)

### Quantum Computing

- [Is quantum computing green? An estimate for an energy-efficiency quantum advantage](https://arxiv.org/abs/2205.12092) - Classical tensor-network emulation is currently more energy-efficient than NISQ hardware, with the green advantage threshold set by gate quality and entanglement. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

### Streaming

- [DIMPACT](https://dimpact.org) - An SLR-convened coalition giving 17+ media firms, including BBC, Netflix, Disney, and Spotify, a Bristol-developed tool and methodology for measuring digital-service emissions. ![tool](https://img.shields.io/badge/tool-blue?style=flat-square)

### Web

- [CarbonTag: A browser-based method for approximating energy consumption of online ads](https://arxiv.org/abs/2211.00071) - A model trained on 25,000+ ads predicts per-ad rendering energy with R² of 0.67-0.97 and negligible overhead, enabling A-G energy labels for advertisements. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)
- [Quantifying Carbon Emissions due to Online Third-Party Tracking](https://arxiv.org/abs/2304.00927) - Third-party tracking inflates web data transmission by upwards of 21%, implying roughly 11 megatonnes of additional greenhouse-gas emissions each year. ![paper](https://img.shields.io/badge/paper-555?style=flat-square)

## Related Lists

- [Awesome AI Tokenomics](https://github.com/QuesmaOrg/awesome-ai-tokenomics) - Roughly 190 tools, papers, and benchmarks for monitoring, optimizing, and governing LLM token cost and waste, including an energy and carbon category. ![list](https://img.shields.io/badge/list-555?style=flat-square)

---

## About the Directory

The Green Software Foundation Directory helps developers, organizations, and enthusiasts find and contribute to projects that reduce carbon emissions and promote sustainability in software development.

### Adding New Entries

Use the contribution form available on the website to add new projects or resources to the directory. Contributions are subject to review to ensure they meet the sustainability criteria of the Green Software Foundation.

## Contributing

Contributions are welcome. To get started:

1. **Fork the repository.**
2. **Create a new branch.**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes.**
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push to the branch.**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a pull request against `dev`.**

Please ensure your contributions align with the [Code of Conduct](code-of-conduct.md) and the [Contributing Guidelines](contributing.md).

### License

This project is licensed under the [MIT License](license).

### Contact

For any inquiries or support, please reach out to [ags@digitalemissions.org](mailto:ags@digitalemissions.org).
