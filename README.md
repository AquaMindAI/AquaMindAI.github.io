# 🌊 AquaMind AI — Official Web Application & GitHub Pages

[![GitHub Pages](https://img.shields.io/badge/Live%20Website-https%3A%2F%2Faquamindai.github.io-brightgreen)](https://aquamindai.github.io)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014%20Static-black)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--7842--1921-green.svg)](https://orcid.org/0009-0003-7842-1921)

> 🌐 **Live Website**: [https://aquamindai.github.io](https://aquamindai.github.io)  
> 🔒 **Core Enterprise Repository & Research Data (Private)**: [AquaMindAI/AquaMindAI](https://github.com/AquaMindAI/AquaMindAI)

> [!IMPORTANT]
> ### 🔒 Məlumatların Məxfiliyi və Giriş İcazəsi (Private Data & Access Request)
> **Bu layihənin əsas tədqiqat dataları, eksperimental telemetriya bazası, AI modelləri, mikrokontroller proqram təminatı və tam mənbə kodu (`AquaMindAI` monorepo) məxfidir (`Private`).**
>
> Akademik tədqiqat, elmi rəy (peer-review), tərəfdaşlıq və ya məxfi repozitoriyalara və datalara **giriş icazəsi (access)** əldə etmək istəyirsinizsə, rəsmi elektron poçt ünvanları vasitəsilə müraciət edə bilərsiniz:
> - 📧 **Əsas E-poçt:** [suleyman.hacizade1@gmail.com](mailto:suleyman.hacizade1@gmail.com)
> - 🎓 **Akademik E-poçt:** [suleyman.hacizade.232bioing@wcu.edu.az](mailto:suleyman.hacizade.232bioing@wcu.edu.az)

Welcome to the official frontend deployment repository of **AquaMind AI**, the intelligent closed-loop IoT and machine learning platform for precision aquaculture and circular aquaponics.

![AquaMind AI Banner](AquaMind-AI.png)

---

## 🧭 Public Platform Routes & Architecture Sitemap

All pages are pre-rendered statically with enterprise Search Engine Optimization (SEO), Open Graph cards, and Schema.org JSON-LD structured data:

| URL / Path | Title & Description | Schema Type |
|---|---|---|
| [**/**](https://aquamindai.github.io/) | **AquaMind AI Dashboard** — Real-time telemetry, multi-pool monitoring & ML forecasts | `WebApplication`, `Organization` |
| [**/research/**](https://aquamindai.github.io/research/) | **Scientific Research & Publication** — Peer-reviewed *RJAAA* framework, author bio & equations | `ScholarlyArticle`, `Person` |
| [**/architecture/**](https://aquamindai.github.io/architecture/) | **System Architecture & IoT** — 4-tier CPS architecture, ESP32 pinout & FastAPI/AI specs | `TechArticle` |
| [**/access/**](https://aquamindai.github.io/access/) | **Private Data & Access Policy** — Verification protocol and email contact links | `ContactPage` |
| [**/wiki/**](https://aquamindai.github.io/wiki/) | **Knowledge Base & Documentation** — Nitrification biology, sensor calibration & FAQ | `FAQPage`, `CollectionPage` |
| [**/sitemap.xml**](https://aquamindai.github.io/sitemap.xml) | **XML Sitemap** — Google standard sitemap with images & priority weights | XML Schema |
| [**/robots.txt**](https://aquamindai.github.io/robots.txt) | **Robots Directives** — Search engine crawler instructions (Google, Bing, Yandex, etc.) | TXT Directives |

---

## 🌟 Key Features of the Web Interface

- **Live Multi-Pool Monitoring**: Real-time telemetry for Sturgeon (*Acipenser*), Nile Tilapia (*Oreochromis*), and Rainbow Trout (*Oncorhynchus*) recirculating loops.
- **Harmonic Diurnal Thermal Forecasts**: 1-hour, 3-hour, and 6-hour machine learning water temperature projections with dynamic confidence intervals.
- **Parametric Health & Risk Scoring**: Instant feedback on ecosystem stability ($S_{\text{health}}$ and $R_{\text{system}}$).
- **Interactive Failure Simulation**: Test critical conditions like `+8°C Thermal Spike` and `-45cm Water Leak` with instant alarm trigger and resolution.
- **Client-Side Reactive Telemetry Engine**: Operates reliably both as a standalone demo on GitHub Pages and when connected to live physical hardware via FastAPI.

---

## 🛠️ Local Development

```bash
# 1. Clone this repository
git clone https://github.com/AquaMindAI/AquaMindAI.github.io.git
cd AquaMindAI.github.io

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# Live at http://localhost:3000

# 4. Build and export static site
npm run build
```

---

## 🔬 Scientific & Engineering Peer Review Compliance

This public portal and its associated core systems have been upgraded according to comprehensive scientific audit standards:
1. **Time-Series ML Methodology**: Transitioned from naive random sampling (leakage) to strict **chronological train/validation/test partitions** and **walk-forward expanding window cross-validation** for multi-horizon forecasting (1h, 3h, 6h).
2. **Biological Instrumentation Boundary**: Explicitly delineates between physical stability monitoring (water temp, level, ambient RH) and the biochemical water chemistry requirements (continuous Dissolved Oxygen, pH, TAN, $\text{NO}_2^-$) mandatory for autonomous live-stock survival.
3. **Edge Microcontroller Safety**: Standardized on logic-level MOSFET actuation (IRLZ44N/IRLB8721 with $V_{GS(th)} \le 2.0\text{ V}$), hardware watchdog timeouts (`WDTO_8S`), and normally-closed aeration circuits to guard against hypoxic system collapse.

---

## 📜 License & Authorship

Licensed under the [Apache License, Version 2.0](LICENSE).  
Copyright © 2026 **AquaMind AI** / **Suleyman Hajizade** (Western Caspian University).
