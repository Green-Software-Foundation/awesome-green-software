# Green Software [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Research, tools, code, libraries, and training for building applications that emit less carbon into our atmosphere.

An [awesome list](https://awesome.re) created and managed by the [Open Source Working Group](https://opensource.greensoftware.foundation) in the [Green Software Foundation](https://greensoftware.foundation).

## Disclaimer

This list is created for informational purposes only, and any links do not constitute an endorsement, recommendation, or favoring by the Green Software Foundation, its member organizations, or contributors to the list.

THESE MATERIALS ARE PROVIDED “AS IS.” The parties expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk of implementing or otherwise using the materials is assumed by the implementer and user. IN NO EVENT WILL THE PARTIES BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THIS DELIVERABLE OR ITS GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER MEMBER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Contents

- [Dev / Tooling](#dev--tooling)
  - [AI](#ai)
    - [Carbon](#ai-carbon)
    - [Energy](#ai-energy)
  - [Cloud based](#cloud-based)
    - [AWS](#aws)
    - [Azure](#azure)
    - [Google](#google)
    - [Multicloud](#multicloud)
  - [Code based](#code-based)
  - [General purpose](#general-purpose)
    - [Emissions](#emissions)
    - [Energy](#energy)
    - [Extensions](#extensions)
  - [OS based](#os-based)
    - [Android](#android)
    - [Linux](#linux)
    - [macOS](#macos)
    - [Web](#web)
    - [Windows](#windows)
- [Organizations](#organizations)
- [Courses](#courses)
- [Articles / Books / Research](#articles--books--research)
  - [Articles](#articles)
  - [Books](#books)
  - [Research](#research)
    - [Artificial Intelligence](#artificial-intelligence)
    - [Blockchain](#blockchain)
    - [Computation](#computation)
    - [Crypto](#crypto)
    - [Data Centers](#data-centers)
    - [Emissions](#emissions-1)
    - [Methodologies](#methodologies) 
    - [Programming Languages](#programming-languages)
    - [Quantum Computing](#quantum-computing)
    - [Streaming](#streaming)
    - [Web](#web-1)

## Dev / Tooling

### AI

#### AI Carbon

- [Experiment Impact Tracker Library](https://github.com/Breakend/experiment-impact-tracker) Calculates carbon cost of ML job
- [FedZero](https://github.com/dos-group/fedzero) Federated learning system for zero-carbon distributed AI training

#### AI Energy

- [Beaker (Allen Institue For AI)](https://allenai.org/blog/beaker-ed617d5f4593) Captures GPU power inside a container
- [carbontracker](https://github.com/lfwa/carbontracker)
- [RAPL in Action: Experiences in Using RAPL for Power Measurements](https://www.researchgate.net/publication/322308215_RAPL_in_Action_Experiences_in_Using_RAPL_for_Power_Measurements)
- [Tool for tracking and predicting the energy consumption and carbon footprint of training deep learning models as described in Anthony et al. (2020)](https://arxiv.org/abs/2007.03051)
- [FedZero](https://github.com/dos-group/fedzero) is a federated learning system for zero-carbon distributed AI training. It is the successor of Lowcarb, which won the GSF CarbonHack 2022. [Related Paper](https://arxiv.org/pdf/2305.15092)

### Cloud-based

#### AWS

- [Customer Carbon Footprint Tool for AWS](https://aws.amazon.com/blogs/aws/new-customer-carbon-footprint-tool/)
- [Green Cost Explorer](https://github.com/thegreenwebfoundation/green-cost-explorer) A climate related spend analysis for AWS.

#### Azure

- [Microsoft Emissions Impact Dashboard](https://www.microsoft.com/en-us/sustainability/emissions-impact-dashboard)

#### Google

- [Carbon Footprint](https://cloud.google.com/carbon-footprint)
- [Cloud Jewels](https://github.com/etsy/cloud-jewels)
  Blog: [Cloud Jewels: Estimating kWh in the Cloud](https://codeascraft.com/2020/04/23/cloud-jewels-estimating-kwh-in-the-cloud/)

#### OVHcloud
  
- [OVHcloud Carbon Calculator](https://www.ovhcloud.com/sites/default/files/external_files/ovh-calculatrice-onepager.pdf?_gl=1*t6w8sy*_gcl_au*MTU2NTIxNTgzMS4xNzE0NTM1MTY2)
  
#### Multicloud

- [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/docs) An open-source cloud energy and carbon emissions measurement tool.
- [Green Metrics Tool](https://www.green-coding.io/products/green-metrics-tool/) A free open-source (FOSS) tool to measure the energy / CO2 consumption of your software architecture.
- [kube-green](https://github.com/kube-green/kube-green) A simple open-source k8s addon that automatically shuts down (some of) your resources when you don't need them.
- [Carbonifer](https://github.com/carboniferio/carbonifer) Command Line Tool to control carbon emission of your cloud infrastructure.
- [Gaia Gen](https://gaiacompany.io/carbon-accounting-software/) A SaaS solution for monitoring and reporting cloud emissions (there is a cost associated with this solution).

### Code based

- [carbonintensity-api](https://github.com/jnioche/carbonintensity-api) Rust: Library and client to retrieve data from the [UK National Grid Carbon Intensity API](https://api.carbonintensity.org.uk/).
- [CAST Highlight](https://learn.castsoftware.com/green-software/) Automatically analyze application source code to identify green deficiencies and improve green impact.
- [codecarbon.io](http://codecarbon.io/) Python : Track and reduce CO2 emissions from your computing
- [energy-consumption-measuring-toolkit](https://github.com/Accenture/energy-consumption-measuring-toolkit) Energy Consumption Measuring Toolkit for Python Applications
- [JoularJX](https://gitlab.com/joular/joularjx) Java: Software power monitoring at the source code level in real-time.
- [Kernel Tuner](https://github.com/kerneltuner/kernel_tuner) an auto-tuner capable of [optimizing GPU code for energy efficiency](https://github.com/KernelTuner/kernel_tuner/blob/master/examples/cuda/going_green_performance_model.py).
- [oaklean.io](https://oaklean.io/) Visualize and optimize the energy consumption of your JavaScript/TypeScript applications. Using a VSCode extension and integration with test frameworks, the system identifies energy-intensive code sections and suggests eco-friendly alternatives.
- [optimizing GPU code for energy efficiency](https://github.com/KernelTuner/kernel_tuner/blob/master/examples/cuda/going_green_performance_model.py).
- [Tracarbon](https://github.com/fvaleye/tracarbon) Tracarbon tracks your device's energy consumption and calculates your carbon emissions using your location
- [Creendengo](https://github.com/green-code-initiative/creedengo-rules-specifications) A SonarQube plugin for PHP, Python, Java, C# and JavaScript, providing static code analyzers to highlight code structures that may have a negative ecological impact.

### General purpose

#### Emissions

- [Carbon AppInsights](https://github.com/cloudyspells/carbon-appinsights) An Azure Functions-based solution for logging emissions data for Azure regions from Electricity Maps to Azure Monitor for alerting triggers and automated actions.
- [Carbon Aware SDK](https://github.com/Green-Software-Foundation/carbon-aware-sdk) A Web API and command line for obtaining unified forecast and historical power grid emissions data based on location and time to help build Carbon Aware software.
- [Carbon Aware Computing Hangfire Extension](https://github.com/bluehands/Hangfire.Community.CarbonAwareExecution) A Hangfire extension to schedule tasks with carbon awareness in mind. The best point in time is calculated based on emission forecasts to get a window with a minimal grid carbon intensity.
- [Carbon Aware Computing - Tools & Free forecast data](https://github.com/bluehands/Carbon-Aware-Computing) The goal of this project is to provide developers with hassle-free, easy-to-use, ready-to-run tools for carbon-aware computing. The software contains a NuGet-Package, Powershell-Commandlets, and a live instance of the SDK. An open data carbon forecast for Europe is available in the JSON-Carbon SDK-compatible format.
- [Electricity Maps Datasets](https://portal.electricitymaps.com/datasets) Historical location-based electricity datasets with hourly granularity and global coverage for free. Data includes flow-traced carbon intensity with both direct and lifecycle emissions factors for the years 2021-2024.
- [Electricity Maps Free API](https://portal.electricitymaps.com/auth/login) Free API access to Electricity Maps flow-traced carbon intensity, electricity mix, renewable energy percentage, and carbon-free energy percentage data. Includes access to real-time data and past 24-hour data for one grid.
- [PSElectricityMaps](https://github.com/cloudyspells/PSElectricityMaps) A PowerShell Module for retrieving current carbon emissions data for power grids with a free account on ElectricityMaps / CO2signal.
- [PSWattTime](https://github.com/cloudyspells/PSWattTime) A PowerShell Module for retrieving current carbon emissions data for power grids with a free account on WattTime.org.

#### Energy

- [Approach to Sustainable Software – Python Applications](https://github.com/Accenture/energy-consumption-measuring-toolkit/tree/8d3d7bedc10232d13ec33611fac6859aeb883b26/Whitepaper-Sustainable-Software-Approach) Solution to adopt sustainable software development practices for high reduction in application energy consumption
- [CO2Scope](https://www.easyvirt.com/en/co2scope-reduce-the-carbon-footprint-of-it-services/) Solution to monitor in real-time the CO2 emissions of IT services, virtual machines, and servers
- [Eco-CI Continuous Integration Energy Estimation](https://github.com/green-coding-berlin/eco-ci-energy-estimation) A plugin for GitHub Actions / GitLab that measures your CI runs and estimates their energy use.
- [Experiment Runner](https://github.com/S2-group/experiment-runner) provides a framework for automatically executing measurement-based experiments on any platform with dedicated plugins for energy related metrics collection.
- [Kepler](https://github.com/sustainable-computing-io/kepler) (Kubernetes-based Efficient Power Level Exporter) uses eBPF to probe energy-related system stats and exports as Prometheus metrics
- [Hardware Sentry](https://www.sentrysoftware.com/products/hardware-sentry.html) Standard OpenTelemetry agent that exposes the energy usage and temperatures of servers, network, and storage systems in data centers
- [PowerJoular](https://gitlab.com/joular/powerjoular) Monitor the power consumption of software and hardware components in real-time, 
- [Scaphandre](https://github.com/hubblo-org/scaphandre) Power measurement (bare metal hosts, prometheus, within a docker container, etc)
- [ML.ENERGY Leaderboard: How much energy do LLMs consume?](https://ml.energy/leaderboard)
- [Zeus: Deep Learning Energy Measurement and Optimization](https://ml.energy/zeus)
- [Vessim](https://vessim.readthedocs.io/en/latest/) is a co-simulation testbed for carbon-aware applications and systems that connects domain-specific simulators for renewable power generation and energy storage with real software and hardware. It was published at HotCarbon'24. [Git](https://github.com/dos-group/vessim) Publsihed in 2024

#### Extensions

- [Approach to Sustainable Software – Python Applications](https://github.com/Accenture/energy-consumption-measuring-toolkit/tree/8d3d7bedc10232d13ec33611fac6859aeb883b26/Whitepaper-Sustainable-Software-Approach) Solution to adopt sustainable software development practices for high reduction in application energy consumption
- [Kepler](https://github.com/sustainable-computing-io/kepler) (Kubernetes-based Efficient Power Level Exporter) uses eBPF to probe energy-related system stats and exports as Prometheus metrics
- [Hardware Sentry](https://www.sentrysoftware.com/products/hardware-sentry.html) Standard OpenTelemetry agent that exposes the energy usage and temperatures of servers, network, and storage systems in data centers
- [PowerJoular](https://gitlab.com/joular/powerjoular): Monitor the power consumption of software and hardware components in real time.
- [scaphandre](https://github.com/hubblo-org/scaphandre) Power measurement (bare metal hosts, prometheus, within a docker container, etc)
- [Vessim](https://github.com/dos-group/vessim) Co-simulation testbed for energy-aware and carbon-aware applications and systems
- [GreenIT-Analysis](https://github.com/cnumr/GreenIT-Analysis) The extension allows you to use your Dev Tools to measure the ecoIndex of a website and verify the application of web eco-design best practices defined by the "Collectif numérique responsible".

### OS-based

#### Android

- [Creedengo mobile](https://github.com/green-code-initiative/ecocode-mobile) A SonarQube plugin to highlight code structures that may have a negative ecological impact.
- [PowDroid](https://gitlab.com/powdroid/powdroid-cli) A lightweight CLI tool for measuring energy consumption at runtime (based on batterystats)

### iOS

- [Creedengo iOS](https://github.com/green-code-initiative/creedengo-ios) A SonarQube plugin to highlight code structures that may have a negative ecological impact.

#### Linux

- [FreeIPMI](https://www.gnu.org/software/freeipmi/) We can get the power consumption of a bare metal machine through the DCMI (IPMI extension).
- [ipmitool](https://github.com/ipmitool/ipmitool) We can get the power consumption of a bare metal machine through the DCMI (IPMI extension).
- [PowerAPI](http://powerapi.org) A Linux software-defined power meter to estimate process-scale power consumption in real time.
- [PowerTOP](https://01.org/powertop) A Linux tool to diagnose issues with power consumption and power management.
- [turbostress](https://github.com/teads/turbostress) This tool generates load and outputs computer power metrics for this load.

#### macOS

- [PowerHog](https://www.green-coding.berlin/projects/power-hog/) A tool to monitor program resource usage and crowdsource the search for wasteful apps.

#### Web

- [Carbonalyser - TheShiftProject](https://theshiftproject.org/en/carbonalyser-browser-extension/)
- [Carbonara - Digital4Better](https://github.com/digital4better/carbonara/) A custom element displaying web navigation carbon footprint
- [Carbon Footprint of Sending Data](https://observablehq.com/@mrchrisadams/carbon-footprint-of-sending-data-around) An online calculator for estimating carbon emissions from network traffic, based on the Shift projects Lean ICT report.
- [CO2.js](https://github.com/thegreenwebfoundation/co2.js/) An npm module for accessing the green web API and estimating the carbon emissions from using digital services
- [EcoGrader.com](https://ecograder.com/) An online website carbon estimator.
- [ecoIndex](https://www.ecoindex.fr/) Estimates the carbon footprint of public websites and pages (in French)
- [ec0lint](https://github.com/ec0lint/ec0lint) Static code analysis tool providing hints for reducing the carbon footprint of websites.
- [EcoMeter.org](http://ecometer.org/) Analyse the website ecodesign maturity.
- [Fruggr](https://www.fruggr.io) Evaluate the environmental and social efficiency of web and mobile applications.
- [Globemallow.io](https://globemallow.io/) Sustainable web development + design best practice reports. Analytics & Ad Blocker reduces the energy required for page load and protects your privacy.
- [GreenFrame.io](https://greenframe.io) Calculate Carbon Footprint of website.
- [GreenSpector](http://mobile-efficiency-index.com/en/)
- [Kastor.green](https://kastor.green/) Evaluate the design compliance of websites and web applications.
- [Website Carbon Calculator](https://www.websitecarbon.com/) An online website carbon estimator.
- [WeDeex - Chrome](https://chrome.google.com/webstore/detail/wedeex/ojlagggckhpedblhemgjhecbggnibale)
- [WeDeex - Edge](https://microsoftedge.microsoft.com/addons/detail/wedeex/jbocoolinibenmobjadejejdbanalfee)
- [Beacon](https://digitalbeacon.co/) Calculate the environmental impact of a web page.

#### Windows

- [powercfg](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options)
  Blog : [Measuring Your Application Power and Carbon Impact](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/)
- [WeDeex](https://github.com/Wedeex-DevTeam/WedeexApp)
  Blog : [We need a Yuka for electricity to ease the energy transition](https://devblogs.microsoft.com/sustainable-software/we-need-a-yuka-for-electricity-to-ease-the-energy-transition/)

## Organizations

- [Climate Action Tech](https://climateaction.tech)
- [Climate Change AI](https://www.climatechange.ai/)
- [Digital Emissions](https://www.digitalemissions.org)
- [Green Software Design Community](https://www.GreenSoftwareDesign.com)
- [Green Software Foundation](https://greensoftware.foundation)
- [Roll the Cloud](https://rollthecloud.com/)
- [SustainableIT.org](https://www.sustainableIT.org)
- [The Green Grid](https://www.thegreengrid.org/)
- [The Green Web Foundation](https://www.thegreenwebfoundation.org/)
- [The Shift Project](https://theshiftproject.org/lean-ict/) (Specifically, their Digital Sobriety / Lean ICT project)
- [TimeForThePlanet](https://www.time-planet.com/fr)

## Courses
- [Green Lab at Vrije Universiteit Amsterdam](https://arxiv.org/abs/2407.05689)
- [Carbon Aware Computing for GenAI Developers - deeplearning.ai](https://www.deeplearning.ai/short-courses/carbon-aware-computing-for-genai-developers/)
- [Curso de Desarrollo de software medioambientalmente sostenible (Green Software) Spanish](https://www.adrformacion.com/cursos/greensoft/greensoft.html)
- [Green Lab at Vrije Universiteit Amsterdam](https://arxiv.org/abs/2407.05689)
- [Harvard ENVR S-186: Enabling a Sustainable Digital Transformation](https://harvard.simplesyllabus.com/en-US/doc/554t3qmym)
- [Sustainable software engineering by openHPI](https://open.hpi.de/courses/sustainablesoftware2022)
- [The Principles of Sustainable Software Engineering](https://docs.microsoft.com/en-us/learn/modules/sustainable-software-engineering-overview/)

## Articles / Books / Research

### Articles
- [Assessing the suitability of the Greenhouse Gas Protocol for calculation of emissions from public cloud computing workloads](https://journalofcloudcomputing.springeropen.com/articles/10.1186/s13677-020-00185-8)
- [Beyond Single-Dimensional Metrics for Digital Sustainability](https://branch.climateaction.tech/issues/issue-3/beyond-single-dimensional-metrics-for-digital-sustainability/)
- [Consumption vs Production: Why grid emissions should be calculated with flow-traced data](https://www.electricitymaps.com/blog/consumption-carbon-intensity)
- [Estimating the marginal carbon intensity of electricity with machine learning](https://www.electricitymaps.com/blog/marginal-carbon-intensity-of-electricity-with-machine-learning)
- [How to incorporate carbon-free energy for Google Cloud regions](https://cloud.google.com/sustainability/region-carbon)
- [How we’re making Dropbox data centers 100% carbon neutral](https://dropbox.tech/infrastructure/making-dropbox-data-centers-carbon-neutral)
- [Optimizing electricity consumption with a marginal signal may not reduce its carbon footprint](https://www.electricitymaps.com/blog/optimizing-electricity-consumption-with-a-marginal-signal-may-not-reduce-its-carbon-footprint)
- [Our data centers now work harder when the sun shines and wind blows - Google](https://blog.google/inside-google/infrastructure/data-centers-work-harder-sun-shines-wind-blows/)
- [Power consumption of JPEG, WebP, and AVIF](https://fershad.com/writing/power-consumption-jpeg-webp-and-avif)
- [Software Carbon Intensity (Sci): Crafting A Standard](https://greensoftware.foundation/articles/software-carbon-intensity-crafting-a-standard)
- [The Staggering Ecological Impacts of Computation and the Cloud](https://thereader.mitpress.mit.edu/the-staggering-ecological-impacts-of-computation-and-the-cloud/)
- [We now do more computing where there’s cleaner energy - Google](https://blog.google/outreach-initiatives/sustainability/carbon-aware-computing-location/)
- [What are the greenest programming languages?](https://medium.com/codex/what-are-the-greenest-programming-languages-e738774b1957)
- [What Do We Need To Build More Sustainable AI Systems?](https://greensoftware.foundation/articles/what-do-we-need-to-build-more-sustainable-ai-systems)
- [Why Should Sustainability Be A First-Class Consideration For AI Systems?](https://greensoftware.foundation/articles/why-should-sustainability-be-a-first-class-consideration-for-ai-systems)

### Books

- [101 Green Software: A Practical Guide for Developers & Architects](https://www.amazon.com/101-Green-Software-Developers-Architects-ebook/dp/B0BPPF82H9/)
- [Building Green Software: A Sustainable Approach to Software Development and Operations](https://learning.oreilly.com/library/view/building-green-software/9781098150617/)
- [Empowering Green Initiatives with IT: A Strategy and Implementation Guide](https://www.amazon.co.uk/dp/0470587520/?coliid=I1XLRMB18CH3JJ&colid=1MBINCMV3RHUI&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it)
- [Designing for Sustainability: A Guide to Building Greener Digital Products and Services](https://www.amazon.co.uk/Designing-Sustainability-Tim-Frick/dp/1491935774)
- [Green IT For Dummies](https://www.amazon.co.uk/dp/0470386886/?coliid=I358607F71QZXK&colid=1MBINCMV3RHUI&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it)
- [Green Software Essentials: A Q&A Guide for Practitioners](https://www.amazon.com/GREEN-SOFTWARE-ESSENTIALS-GUIDE-PRACTITIONERS/dp/B0CNPZ3465/ref=sr_1_2?crid=EHTVSUST74S8&dib=eyJ2IjoiMSJ9.MoBmRlXhOaT56DgAMHBnHwbxeNcxZkTiHa1aSFc2WH84VaBQn4taBOZQma4CALBBBYM1H-vEXp6CBWnYzr5TcD6WRSOi4a-JXdABv3zhPvEmSg42Jz0C4OlfNvxG1q4Fe06rEi4pdrJtdy5LvkHlD2YZa_F8gG-zn-EHYmmPDdv9CD4U4gDs-BNjUyqnpaue96HXw4EQSv-acJvS-a7aEL8L17AjvmGA1fHwFtmrXF8.ocsOcvKUxNdMx-2gIOEvohOCt153fw9AJN8rrnlFZ1Q&dib_tag=se&keywords=green+software&qid=1716862688&s=books&sprefix=green+software%2Cstripbooks%2C93&sr=1-2)
- [Software Sustainability](https://link.springer.com/book/10.1007/978-3-030-69970-3)
- [Sustainable IT Playbook for Technology Leaders](https://www.amazon.co.uk/Sustainable-Playbook-Technology-Leaders-opportunities/dp/1803230347)
- [Sustainable Web Design](https://www.goodreads.com/en/book/show/56861271-sustainable-web-design)
- [The Green IT Guide](https://learning.oreilly.com/library/view/the-green-it/9781484280577/)

### Research

#### Artificial Intelligence

- [Carbon-Neutralized Task Scheduling for Green Computing Networks](https://arxiv.org/abs/2209.02198)
- [Counting Carbon: A Survey of Factors Influencing the Emissions of Machine Learning](https://arxiv.org/abs/2302.08476)
- [Climate Change and AI: Recommendations for Government Action](https://www.gpai.ai/projects/climate-change-and-ai.pdf)
- [Efficiency is Not Enough: A Critical Perspective of Environmentally Sustainable AI](https://arxiv.org/abs/2309.02065)
- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/abs/1906.02243)
- [Energy-Efficient AI | Vivienne Sze | TEDxMIT](https://www.youtube.com/watch?v=Y0XGSnRrWiU&ab_channel=TEDxTalks)
- [Exploring the Carbon Footprint of Hugging Face's ML Models: A Repository Mining Study](https://arxiv.org/abs/2305.11164)
- [FedZero: Leveraging Renewable Excess Energy in Federated Learning](https://arxiv.org/pdf/2305.15092.pdf)
- [Good News About the Carbon Footprint of Machine Learning Training](https://ai.googleblog.com/2022/02/good-news-about-carbon-footprint-of.html)
- [How to estimate carbon footprint when training deep learning models? A guide and review](https://arxiv.org/abs/2306.08323)
- [LLMCarbon: Modeling the end-to-end Carbon Footprint of Large Language Models](https://arxiv.org/abs/2309.14393)
- [Measuring the Carbon Intensity of AI in Cloud Instances](https://arxiv.org/abs/2206.05229)
- [Quantifying the Carbon Emissions of Machine Learning](https://arxiv.org/abs/1910.09700)
- [SECure: A Social and Environmental Certificate for AI Systems](https://arxiv.org/abs/2006.06217)
- [Software Development Lifecycle for Energy Efficiency: Techniques and Tools](https://dl.acm.org/doi/abs/10.1145/3337773)
- [Software Sustainability](https://link.springer.com/book/10.1007/978-3-030-69970-3)
- [The AI Gambit — Leveraging Artificial Intelligence to Combat Climate Change: Opportunities, Challenges, and Recommendations](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3804983)
- [The Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink](https://www.techrxiv.org/articles/preprint/The_Carbon_Footprint_of_Machine_Learning_Training_Will_Plateau_Then_Shrink/19139645/1)
- [The Impact of Knowledge Distillation on the Energy Consumption and Runtime Efficiency of NLP Models](https://www.ivanomalavolta.com/files/papers/CAIN_2024.pdf)
- [The Imperative for Sustainable AI Systems](https://thegradient.pub/sustainable-ai/)
- [Towards Environmentally Equitable AI via Geographical Load Balancing](https://arxiv.org/abs/2307.05494)
- [The Two Faces of AI in Green Mobile Computing: A Literature Review](https://arxiv.org/abs/2308.04436)
- [Unraveling the hidden environmental impacts of AI solutions for the environment](https://arxiv.org/abs/2110.11822)
- [Chasing Low-Carbon Electricity for Practical and Sustainable DNN Training](https://www.climatechange.ai/papers/iclr2023/29)
- [Zeus: Understanding and Optimizing GPU Energy Consumption of DNN Training](https://www.usenix.org/conference/nsdi23/presentation/you)

#### Blockchain

- [An Analysis of Energy Consumption and Carbon Footprints of Cryptocurrencies and Possible Solutions](https://arxiv.org/abs/2203.03717)
- [Confronting the Carbon-footprint Challenge of Blockchain](https://arxiv.org/abs/2201.06929)
- [Ethereum Emissions: A Bottom-up Estimate](https://arxiv.org/abs/2112.01238)

#### Computation

- [A Comparative Study of Methods for Measurement of Energy of Computing](https://www.mdpi.com/1996-1073/12/11/2204/pdf)
- [An experiment-driven energy consumption model for virtual machine management systems](https://hal.archives-ouvertes.fr/hal-01632962/document)
- [Embodied Carbon Accounting through Spatial-Temporal Embodied Carbon Models](https://arxiv.org/abs/2312.06364)
- [EnergiBridge: Empowering Software Sustainability through Cross-Platform Energy Measurement](https://arxiv.org/abs/2312.13897)
- [Let’s Wait Awhile: How Temporal Workload Shifting Can Reduce Carbon Emissions in the Cloud](https://arxiv.org/pdf/2110.13234.pdf)
- [Going Green: Optimizing GPUs for Energy Efficiency Through Model-steered Auto-tuning](https://arxiv.org/abs/2211.07260)
- [Green-aware Mobile Edge Computing for IoT: Challenges, Solutions, and Future Directions](https://arxiv.org/abs/2009.03598)
- [Measuring IT Carbon Footprint: What is the Current Status Actually?](https://arxiv.org/abs/2306.10049)
- [Quantifying the Carbon Emissions of Computation](https://arxiv.org/ftp/arxiv/papers/2007/2007.07610.pdf)
- [Software Development Lifecycle for Energy Efficiency: Techniques and Tools](https://dl.acm.org/doi/abs/10.1145/3337773)

#### Crypto

- [Accounting for carbon emissions caused by cryptocurrency and token systems](https://arxiv.org/abs/2111.06477)

#### Data Centers

- [Architectural Tactics to Optimize Software for Energy Efficiency in the Public Cloud](https://github.com/so-vos/thesis/blob/main/Thesis_Vos_2021.pdf)
- [Balancing Power Systems with Datacenters Using a Virtual Interconnector](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7452537)
- [Carbon-Aware Computing for Datacenters](https://arxiv.org/abs/2106.11750)
- [Hiding Greenhouse Gas Emissions in the Cloud](https://www.nature.com/articles/s41558-020-0837-6)
- [Power consumption and efficiency of cooling in a Data Center](https://ieeexplore.ieee.org/document/5697800)
- [Quantifying the Benefits of Carbon-Aware Temporal and Spatial Workload Shifting in the Cloud](https://arxiv.org/abs/2306.06502)
- [Supporting energy-awareness for cloud users](https://tel.archives-ouvertes.fr/tel-01973083/file/GUYON_David.pdf)
- [The Case for Energy-Proportional Computing](https://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/33387.pdf)
- [The Dirty Secret of SSDs: Embodied Carbon](https://arxiv.org/abs/2207.10793)
- [Treehouse: A Case For Carbon-Aware Datacenter Software](https://arxiv.org/abs/2201.02120)
- [Verifiable Sustainability in Data Centers](https://arxiv.org/abs/2307.11993)

#### Emissions

- [A Framework For Collective Carbon Neutrality](https://www.carbone4.com/wp-content/uploads/2020/05/Carbone-4-NZI-Guidelines-Executive-Summary-april-2020.pdf)
- [Methodological Guide - Bilan Carbone (French)](https://www.associationbilancarbone.fr/wp-content/uploads/2018/03/bilan-carbone-v8-guide-methodologique-final.pdf)
- [On the Implications of Choosing Average versus Marginal Carbon Intensity Signals on Carbon-aware Optimizations](https://dl.acm.org/doi/10.1145/3632775.3661953)
- [Putting a CO2 figure on a piece of computation](https://ieeexplore.ieee.org/document/6128960)
- [The energy and carbon footprint of the ICT and E&M sector in Sweden 1990–2015 and beyond](https://download.atlantis-press.com/article/25860385.pdf)
- [The Most Important GHG Accounting Concept You May Not Have Heard of: The Attributional Consequential Distinction](https://ghginstitute.org/2021/04/21/the-most-important-ghg-accounting-concept-you-may-not-have-heard-of-the-attributional-consequential-distinction/)
- [Tracking emissions in the US electricity system](https://web.stanford.edu/~jdechale/emissions_app/#/about)

#### Methodologies

- [Development and evaluation of a reference measurement model for assessing the resource and energy efficiency of software products and components-Green Software Measurement Model (GSSM)](https://www.sciencedirect.com/science/article/pii/S0167739X24000384)
- [Software development methodology in a Green IT environment](https://tel.archives-ouvertes.fr/tel-01724069/document)
- [The GREENSOFT Model: A reference model for green and sustainable software and its engineering](https://www.sciencedirect.com/science/article/abs/pii/S2210537911000473)

#### Programming Languages

- [An Empirical Study on the Energy Usage and Performance of Pandas and Polars Data Analysis Python Libraries](http://www.ivanomalavolta.com/files/papers/EASE_2024.pdf)
- [Energy Efficiency Across Programming Languages](https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf)
- [Google Apps: Energy Efficiency in the Cloud](https://static.googleusercontent.com/media/www.google.com/en//green/pdf/google-apps.pdf)
- [Green and Sustainability in Software Development Lifecycle Process](https://www.intechopen.com/chapters/69865)
- [GreenC5: An Adaptive, Energy-Aware Collection for Green Software Development](https://digitalcommons.du.edu/cgi/viewcontent.cgi?article=2122&context=etd)

#### Testing of Green Software

- [Vessim: A Testbed for Carbon-Aware Applications and Systems.](https://arxiv.org/pdf/2306.09774.pdf)
- [Software-in-the-Loop Simulation for Developing and Testing Carbon-Aware Applications.](https://doi.org/10.1002/spe.3275)

#### Testing of Green Software

- [Vessim: A Testbed for Carbon-Aware Applications and Systems.](https://arxiv.org/pdf/2306.09774.pdf)
- [Software-in-the-Loop Simulation for Developing and Testing Carbon-Aware Applications.](https://doi.org/10.1002/spe.3275)

#### Quantum Computing

- [Is quantum computing green? An estimate for an energy-efficiency quantum advantage](https://arxiv.org/abs/2205.12092)

#### Streaming

- [DImpact](https://dimpact.org)

#### Web

- [An Empirical Study on the Performance and Energy Costs of Ads and Analytics in Mobile Web Apps](http://www.ivanomalavolta.com/files/papers/IST_2024.pdf)
- [CarbonTag: A browser-based method for approximating energy consumption of online ads](https://arxiv.org/abs/2211.00071)
- [Quantifying Carbon Emissions due to Online Third-Party Tracking](https://arxiv.org/abs/2304.00927)

## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.
