import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Sistem Arxitekturası və IoT Mühəndisliyi — AquaMind AI',
  description: 'AquaMind AI 4-səviyyəli kibernetik-fiziki sistem arxitekturası: ESP32 mikrokontrolleri, analoq/rəqəmsal sensorlar (DO, pH, TDS, Temp), FastAPI backend və Random Forest Süni İntellekt mühərriki.',
  keywords: [
    'AquaMind AI Arxitektura',
    'IoT Sistem Arxitekturası',
    'ESP32 Akvakültür',
    'Kibernetik Fiziki Sistemlər',
    'FastAPI Akvakultura',
    'Random Forest AI',
    'DFRobot pH Sensor',
    'DS18B20 1-Wire',
    'Optik Oksigen Sensoru',
    'FreeRTOS Telemetriya',
    'Ağıllı Akvaponika Mühəndisliyi',
    'Süleyman Hacızadə',
    'Qərbi Kaspi Universiteti'
  ],
  alternates: {
    canonical: 'https://aquamindai.github.io/architecture/'
  },
  openGraph: {
    title: 'Sistem Arxitekturası və IoT Mühəndisliyi — AquaMind AI',
    description: 'ESP32 mikrokontrolleri, sənaye sensorları və Süni İntellekt əsaslı qapalı dövriyyəli akvakültür mühəndisliyi.',
    url: 'https://aquamindai.github.io/architecture/',
    siteName: 'AquaMind AI',
    type: 'article',
    images: [{ url: 'https://aquamindai.github.io/AquaMind-AI.png', width: 1200, height: 630 }]
  }
};

const architectureJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  'headline': 'AquaMind AI: Cyber-Physical Architecture & IoT Engineering Specifications',
  'description': 'Four-tier architectural specification detailing embedded ESP32 edge processing, sensor telemetry buses, machine learning predictive inference, and real-time supervisory control.',
  'author': {
    '@type': 'Person',
    'name': 'Süleyman Hacızadə',
    'identifier': 'https://orcid.org/0009-0003-7842-1921'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'AquaMind AI'
  },
  'mainEntityOfPage': 'https://aquamindai.github.io/architecture/',
  'url': 'https://aquamindai.github.io/architecture/'
};

export default function ArchitecturePage() {
  const tiers = [
    {
      num: '01',
      title: 'Tier 1: Fiziki Sensor Qatı (Physical Edge & Sensor Array)',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      desc: 'Suyun əsas bio-kimyəvi və fiziki parametrlərini fasiləsiz ölçən dəqiq sensor infrastrukturu:',
      specs: [
        'DFRobot Gravity Analoq pH Sensoru (Dəqiqlik: ±0.1 pH, Ölçü aralığı: 0-14 pH)',
        'Optik Qalvanik Həll Olmuş Oksigen (DO) Zondası (Dəqiqlik: ±0.2 mg/L, Aralıq: 0-20 mg/L)',
        'DS18B20 1-Wire Rəqəmsal Su Keçirməz Temperatur Sensoru (Dəqiqlik: ±0.5°C, Aralıq: -10°C - +85°C)',
        'Analoq TDS (Total Dissolved Solids) Zondası (Dəqiqlik: ±10% F.S., Aralıq: 0-1000 ppm)',
        'Optocuple Bulanıqlıq (Turbidity) Sensoru (İnfraqırmızı fotodiod əsaslı, 0-3000 NTU)',
        'Ultrasonik Su Səviyyəsi Sensoru (HC-SR04P / JSN-SR04T Su keçirməz, 20-450 sm)'
      ]
    },
    {
      num: '02',
      title: 'Tier 2: Quraşdırılmış Şəbəkə Qatı (Embedded ESP32 Edge Computing)',
      color: 'border-[#38bdf8]/30 text-[#38bdf8] bg-[#38bdf8]/10',
      desc: 'Məlumatların toplanması, rəqəmsal süzgəcdən keçirilməsi və aktuatorların yerli idarə edilməsi:',
      specs: [
        'ESP32-WROOM-32D (Dual-Core Xtensa 32-bit LX6 Mikrokontroller, 240 MHz)',
        'FreeRTOS Real-Time Əməliyyat Sistemi: Core 0 (Sensor sorğusu və Kalman filteri) + Core 1 (WiFi/MQTT rabitəsi)',
        '12-bit ADC Kalibrasiyası və Çoxpilləli Analoq Küy Azaldıcı Rəqəmsal Süzgəclər',
        'Fail-Safe Rejimi: İnternet və ya server əlaqəsi kəsildikdə belə yerli qəza həyəcanı və aerasiya klapanlarının avtomatik işə düşməsi',
        'Opto-izolyasiyalı 4-Kanallı 220V/10A Rele Modulu (Aeratorlar, Su Pompaları, Qızdırıcı/Soyuducu, Yemləmə servoları)'
      ]
    },
    {
      num: '03',
      title: 'Tier 3: Bulud və AI İnferens Qatı (FastAPI & Machine Learning)',
      color: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      desc: 'Telemetriya axınının qəbulu, proqnozlaşdırılması və qərar qəbuletmə alqoritmləri:',
      specs: [
        'FastAPI Asinxron ASGI Backend (Python 3.11+) · Yüksək ötürücülük və minimal gecikmə (< 15ms)',
        'Random Forest Regressor (Scikit-Learn): Növbəti 1, 3 və 6 saatlıq su temperaturunun proqnozu (R² = 0.942)',
        'Isolation Forest & Parametrik Qayda Mühərriki: Anomaliyaların və sensör nasazlıqlarının anında aşkarlanması',
        'Zaman Ardıcıllığı Verilənlər Bazası (Time-Series Telemetry DB) · Dövri statistik aqreqasiyalar',
        'WebSocket və RESTful API Endpoints: Real-vaxt ikitərəfli telemetriya və idarəetmə siqnalları'
      ]
    },
    {
      num: '04',
      title: 'Tier 4: Veb İdarəetmə Paneli (Next.js 14 Glassmorphism UI)',
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      desc: 'İstifadəçi və operator üçün responsiv, müasir interaktiv vizuallaşdırma interfeysi:',
      specs: [
        'Next.js 14 App Router və React 18 · Yüksək sürətli statik pre-rendering və SEO optimizasiyası',
        'Tailwind CSS Neomorfik / Glassmorphism vizual dizayn dili',
        'Recharts İnteraktiv Qrafikləri: Temperatur dalğalanması, oksigen doyma əyriləri və sensor dinamikası',
        'Simulyasiya Aləti: Termal şok və su sızması qəza ssenarilərinin interaktiv sınaqdan keçirilməsi',
        'PWA Dəstəyi (Progressive Web App): Mobil və planşet cihazlarda tətbiq kimi quraşdırılma imkanı'
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(architectureJsonLd) }}
      />
      <div className="min-h-screen bg-[#030f1a] text-[#e2e8f0] p-4 md:p-8 font-sans selection:bg-[#38bdf8]/30">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* NAVBAR */}
          <Navbar active="architecture" isLive={false} />

          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] flex items-center gap-2">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">Əsas Səhifə</a>
            <span>/</span>
            <span className="text-[#38bdf8] font-medium">Sistem Arxitekturası &amp; IoT</span>
          </nav>

          {/* MAIN HERO */}
          <header className="glass p-6 md:p-10 rounded-2xl border border-[#38bdf8]/20 bg-[#071322]/85 shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8]">
                Cyber-Physical System Design
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0a1628] border border-white/10 text-slate-300">
                Hardware &amp; Software
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              AquaMind AI Sistem Arxitekturası və IoT Mühəndisliyi
            </h1>

            <p className="text-xs md:text-sm text-[#94a3b8] max-w-4xl leading-relaxed">
              AquaMind AI — sənaye səviyyəli sensor dəqiqliyini, yerli quraşdırılmış (embedded) hesablama gücünü və bulud maşın öyrənməsi modellərini qapalı dövriyyəli idarəetmə zəncirində birləşdirən kibernetik-fiziki sistemdir (Cyber-Physical System - CPS).
            </p>
          </header>

          {/* 4 TIERS GRID */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🏛️</span>
              <span>4-Səviyyəli Dərin Arxitektura İyerarxiyası</span>
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {tiers.map((tier) => (
                <section
                  key={tier.num}
                  className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-[#071322]/80 space-y-4 shadow-xl hover:border-[#38bdf8]/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1.5 rounded-xl text-xs font-extrabold font-mono border ${tier.color}`}>
                        {tier.num}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-white">{tier.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[#cbd5e1]">{tier.desc}</p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                    {tier.specs.map((spec, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 p-3 rounded-xl bg-[#030f1a]/80 border border-white/5 text-xs text-[#cbd5e1]">
                        <span className="text-[#38bdf8] font-bold mt-0.5">▹</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          {/* HARDWARE PINOUT & WIRING MATRIX */}
          <section className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-[#071322]/80 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🔌</span>
              <span>ESP32 Aparat Pinout və İnterfeys Xəritəsi</span>
            </h2>
            <p className="text-xs text-[#94a3b8]">
              Mikrokontroller və sensorlar arasında əlaqə protokolları və GPIO konfiqurasiyası:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-[#0a1628] text-[#38bdf8] font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-white/10">Sensor / Modul</th>
                    <th className="p-3 border-b border-white/10">Protokol / İnterfeys</th>
                    <th className="p-3 border-b border-white/10">ESP32 GPIO Pin</th>
                    <th className="p-3 border-b border-white/10">İşləmə Gərginliyi</th>
                    <th className="p-3 border-b border-white/10">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#cbd5e1]">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-semibold text-white">DFRobot Analog pH</td>
                    <td className="p-3 font-mono">Analog Voltage (0-3.3V)</td>
                    <td className="p-3 font-mono text-[#38bdf8]">GPIO 34 (ADC1_CH6)</td>
                    <td className="p-3">3.3V / 5.0V</td>
                    <td className="p-3 text-emerald-400 font-semibold">Aktiv</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-semibold text-white">Optical Dissolved Oxygen (DO)</td>
                    <td className="p-3 font-mono">Analog / UART Serial</td>
                    <td className="p-3 font-mono text-[#38bdf8]">GPIO 35 (ADC1_CH7)</td>
                    <td className="p-3">5.0V</td>
                    <td className="p-3 text-emerald-400 font-semibold">Aktiv</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-semibold text-white">DS18B20 Su Temperaturu</td>
                    <td className="p-3 font-mono">1-Wire Digital Bus</td>
                    <td className="p-3 font-mono text-[#38bdf8]">GPIO 4 (Pull-Up 4.7kΩ)</td>
                    <td className="p-3">3.3V</td>
                    <td className="p-3 text-emerald-400 font-semibold">Aktiv</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-semibold text-white">Analog TDS Sensoru</td>
                    <td className="p-3 font-mono">Analog Voltage</td>
                    <td className="p-3 font-mono text-[#38bdf8]">GPIO 32 (ADC1_CH4)</td>
                    <td className="p-3">3.3V</td>
                    <td className="p-3 text-emerald-400 font-semibold">Aktiv</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-semibold text-white">Opto-İzolyasiyalı Rele Modulu</td>
                    <td className="p-3 font-mono">Digital GPIO Output</td>
                    <td className="p-3 font-mono text-[#38bdf8]">GPIO 16, 17, 18, 19</td>
                    <td className="p-3">5.0V / 220V AC Relay</td>
                    <td className="p-3 text-emerald-400 font-semibold">Aktiv</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#0a1628] via-rose-950/20 to-[#0a1628] border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🔒</span>
                <span>Sxemlər, Mikrokontroller Kodu və Firmware Məxfiliyi</span>
              </h3>
              <p className="text-xs text-[#94a3b8]">
                Aparat sxemləri (KiCad), PCB çertyojları və C++ firmware mənbə kodu əqli mülkiyyət səbəbilə Private repozitoriyada qorunur.
              </p>
            </div>
            <a
              href="/access/"
              className="px-4 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#0284c7] text-[#030f1a] hover:text-white font-bold text-xs transition-all shadow-lg shadow-[#38bdf8]/20 text-center w-full md:w-auto">
              Giriş İcazəsi İstəyin ↗
            </a>
          </div>

          {/* FOOTER */}
          <Footer />

        </div>
      </div>
    </>
  );
}
