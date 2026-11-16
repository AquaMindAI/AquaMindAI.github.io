# AquaMind AI: Official Web Application

[![Live Platform](https://img.shields.io/badge/Live%20Platform-https%3A%2F%2Faquamindai.github.io-brightgreen?style=flat-square)](https://aquamindai.github.io)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014%20Static-black?style=flat-square)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](LICENSE)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--7842--1921-green.svg?style=flat-square)](https://orcid.org/0009-0003-7842-1921)

> **Live Website**: [https://aquamindai.github.io](https://aquamindai.github.io)  
> **Core Enterprise Repository & Research Data (Private)**: [AquaMindAI/AquaMindAI](https://github.com/AquaMindAI/AquaMindAI)

> ### Məlumatların Məxfiliyi və Giriş İcazəsi (Private Data & Access Request)
> Bu layihənin əsas tədqiqat dataları, eksperimental telemetriya bazası, maşın öyrənməsi modelləri, mikrokontroller proqram təminatı və tam mənbə kodu (`AquaMindAI` monorepo) məxfidir (`Private`).
>
> Akademik tədqiqat, elmi rəy (peer-review), tərəfdaşlıq və ya məxfi repozitoriyalara və datalara giriş icazəsi (access) əldə etmək üçün rəsmi elektron poçt ünvanları vasitəsilə müraciət edə bilərsiniz:
> - Əsas elektron poçt: [suleyman.hacizade1@gmail.com](mailto:suleyman.hacizade1@gmail.com)
> - Akademik elektron poçt: [suleyman.hacizade.232bioing@wcu.edu.az](mailto:suleyman.hacizade.232bioing@wcu.edu.az)

Welcome to the official frontend deployment repository of **AquaMind AI**, the closed-loop IoT and machine learning platform for precision aquaculture and circular aquaponics.

![AquaMind AI Banner](AquaMind-AI.png)

---

## Public Platform Routes & Architecture Sitemap

All pages are pre-rendered statically with structured metadata, Open Graph tags, and Schema.org JSON-LD formatting:

| URL / Path | Title & Description | Schema Type |
|---|---|---|
| [**/**](https://aquamindai.github.io/) | **AquaMind AI Dashboard** — Real-time telemetry, multi-pool monitoring & ML forecasts | `WebApplication`, `Organization` |
| [**/research/**](https://aquamindai.github.io/research/) | **Scientific Research & Publication** — Peer-reviewed *RJAAA* framework, author bio & equations | `ScholarlyArticle`, `Person` |
| [**/architecture/**](https://aquamindai.github.io/architecture/) | **System Architecture & IoT** — 4-tier CPS architecture, ESP32 pinout & FastAPI/AI specs | `TechArticle` |
| [**/access/**](https://aquamindai.github.io/access/) | **Private Data & Access Policy** — Verification protocol and email contact links | `ContactPage` |
| [**/wiki/**](https://aquamindai.github.io/wiki/) | **Knowledge Base & Documentation** — Nitrification biology, sensor calibration & FAQ | `FAQPage`, `CollectionPage` |
| [**/sitemap.xml**](https://aquamindai.github.io/sitemap.xml) | **XML Sitemap** — Search engine index configuration | XML Schema |
| [**/robots.txt**](https://aquamindai.github.io/robots.txt) | **Robots Directives** — Search engine crawler instructions | TXT Directives |

---

## Key Features of the Web Interface

- **Live Multi-Pool Monitoring**: Real-time telemetry for Sturgeon (*Acipenser*), Nile Tilapia (*Oreochromis*), and Rainbow Trout (*Oncorhynchus*) recirculating loops.
- **Harmonic Diurnal Thermal Forecasts**: 1-hour, 3-hour, and 6-hour machine learning water temperature projections with dynamic confidence intervals.
- **Parametric Health & Risk Scoring**: Instant feedback on ecosystem stability ($S_{\text{health}}$ and $R_{\text{system}}$).
- **Interactive Failure Simulation**: Test conditions like thermal spikes and water leaks with instant alarm visualization and threshold alerts.
- **Client-Side Reactive Telemetry Engine**: Operates reliably as an interactive demonstration on GitHub Pages and interfaces with physical hardware via the FastAPI backend.

---

## Local Development

```bash
# 1. Clone this repository
git clone https://github.com/AquaMindAI/AquaMindAI.github.io.git
cd AquaMindAI.github.io

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build and export static site
npm run build
```

---

## Scientific & Engineering Review Compliance

This public portal and its associated core systems have been structured in accordance with academic engineering review standards:
1. **Time-Series ML Methodology**: Incorporates chronological train/validation/test partitions and walk-forward cross-validation for multi-horizon forecasting (1h, 3h, 6h).
2. **Biological Instrumentation Boundary**: Distinguishes between physical stability monitoring (water temp, level, ambient RH) and biochemical water chemistry parameters (continuous Dissolved Oxygen, pH, TAN, $\text{NO}_2^-$) essential for live-stock health.
3. **Edge Microcontroller Safety**: Specifies logic-level MOSFET actuation (IRLZ44N/IRLB8721 with $V_{GS(th)} \le 2.0\text{ V}$), hardware watchdog timeouts (`WDTO_8S`), and normally-closed aeration circuits to guard against hypoxic system failure.

---

## License & Authorship

Licensed under the [Apache License, Version 2.0](LICENSE).  
Copyright © 2026 AquaMind AI / Suleyman Hajizade (Western Caspian University).
