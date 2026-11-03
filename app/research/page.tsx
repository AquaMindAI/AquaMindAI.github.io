import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Elmi Tədqiqat və Məqalə — AquaMind AI | RJAAA Nəşri',
  description: 'AquaMind-AI: An Intelligent IoT and Machine Learning Framework for Closed-Loop Smart Aquaponics. Müəllif: Süleyman Hacızadə, Qərbi Kaspi Universiteti. RJAAA elmi məqaləsi və biomühəndislik metodologiyası.',
  keywords: [
    'AquaMind AI Tədqiqat',
    'AquaMind Research',
    'RJAAA',
    'Research Journal of Adaptive Agriculture and Aquaculture',
    'Süleyman Hacızadə',
    'Suleyman Hajizade',
    'Western Caspian University',
    'Qərbi Kaspi Universiteti',
    'Molekulyar Biologiya və Biotexnologiyalar İnstitutu',
    'Smart Aquaponics Framework',
    'Closed-Loop Aquaculture',
    'Kür Nərəsi Aquaponika',
    'Akvakultura Biomühəndislik',
    'ORCID 0009-0003-7842-1921',
    'Diurnal Water Temperature Model',
    'Dissolved Oxygen Kinetics'
  ],
  alternates: {
    canonical: 'https://aquamindai.github.io/research/'
  },
  openGraph: {
    title: 'Elmi Tədqiqat və Nəşr — AquaMind AI',
    description: 'AquaMind-AI: Qapalı dövriyyəli akvaponika və dəqiq akvakültür üçün IoT və Maşın Öyrənməsi Çərçivəsi. Müəllif: Süleyman Hacızadə.',
    url: 'https://aquamindai.github.io/research/',
    siteName: 'AquaMind AI',
    type: 'article',
    images: [{ url: 'https://aquamindai.github.io/AquaMind-AI.png', width: 1200, height: 630 }]
  }
};

const researchJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  'headline': 'AquaMind-AI: An Intelligent IoT and Machine Learning Framework for Closed-Loop Smart Aquaponics',
  'alternativeHeadline': 'A Comprehensive Review and Cyber-Physical Architecture',
  'author': {
    '@type': 'Person',
    'name': 'Süleyman Hacızadə',
    'alternateName': 'Suleyman Hajizade',
    'identifier': 'https://orcid.org/0009-0003-7842-1921',
    'affiliation': {
      '@type': 'EducationalOrganization',
      'name': 'Western Caspian University',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Baku',
        'addressCountry': 'Azerbaijan'
      }
    }
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Research Journal of Adaptive Agriculture and Aquaculture (RJAAA)'
  },
  'datePublished': '2026-09-09',
  'keywords': 'Smart Aquaponics, IoT, Machine Learning, Random Forest, Water Quality Management, Caspian Basin, Acipenser',
  'mainEntityOfPage': 'https://aquamindai.github.io/research/',
  'url': 'https://aquamindai.github.io/research/',
  'about': [
    'Aquaculture',
    'Aquaponics',
    'Bioengineering',
    'Artificial Intelligence',
    'Internet of Things'
  ]
};

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
      />
      <div className="min-h-screen bg-[#030f1a] text-[#e2e8f0] p-4 md:p-8 font-sans selection:bg-[#38bdf8]/30">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* NAVBAR */}
          <Navbar active="research" isLive={false} />

          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] flex items-center gap-2">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">Əsas Səhifə</a>
            <span>/</span>
            <span className="text-[#38bdf8] font-medium">Elmi Tədqiqat və Məqalə</span>
          </nav>

          {/* ARTICLE HERO */}
          <article className="glass p-6 md:p-10 rounded-2xl border border-[#38bdf8]/20 bg-[#071322]/85 shadow-2xl space-y-6">
            <div className="space-y-3 border-b border-white/10 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8]">
                  Peer-Reviewed Research Article
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0a1628] border border-white/10 text-slate-300">
                  Target Journal: RJAAA
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                  Bioengineering &amp; AI
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                AquaMind-AI: An Intelligent IoT and Machine Learning Framework for Closed-Loop Smart Aquaponics
              </h1>

              <p className="text-sm md:text-base text-[#38bdf8] italic font-medium">
                A Comprehensive Review and Cyber-Physical Architecture
              </p>
            </div>

            {/* AUTHOR METADATA CARD */}
            <div className="p-5 rounded-xl bg-[#0a1628]/80 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <div className="text-[#94a3b8] uppercase tracking-wider font-semibold">Tədqiqatçı Müəllif:</div>
                <div className="text-base font-bold text-white flex items-center gap-2">
                  <span>Süleyman Hacızadə (Suleyman Hajizade)</span>
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Qərbi Kaspi Universiteti (Western Caspian University), Yüksək Texnologiyalar və İnnovativ Mühəndislik Məktəbi, Təbiət Elmləri Kafedrası · Bakı, Azərbaycan.
                </p>
                <p className="text-[#94a3b8]">
                  AR Elm və Təhsil Nazirliyi Molekulyar Biologiya və Biotexnologiyalar İnstitutu.
                </p>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">ORCID:</span>
                  <a
                    href="https://orcid.org/0009-0003-7842-1921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline font-mono">
                    0009-0003-7842-1921 ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">ResearcherID:</span>
                  <span className="text-[#38bdf8] font-mono">NNH-0485-2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Əlaqə E-poçtu:</span>
                  <a href="mailto:suleyman.hacizade1@gmail.com" className="text-[#38bdf8] hover:underline font-mono">
                    suleyman.hacizade1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Akademik Ünvan:</span>
                  <a href="mailto:suleyman.hacizade.232bioing@wcu.edu.az" className="text-[#38bdf8] hover:underline font-mono">
                    suleyman.hacizade.232bioing@wcu.edu.az
                  </a>
                </div>
              </div>
            </div>

            {/* ABSTRACT */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span>📑</span>
                <span>Annotasiya (Abstract)</span>
              </h2>
              <div className="p-5 rounded-xl bg-[#030f1a]/80 border border-white/5 text-xs md:text-sm text-[#cbd5e1] leading-relaxed space-y-3 text-justify">
                <p>
                  Akvaponika balıq yetişdirilməsi (akvakultura) ilə torpaqsız bitki becərilməsini (hidroponika) vahid qapalı dövriyyəli ekosistemdə birləşdirən qabaqcıl kənd təsərrüfatı texnologiyasıdır. Ənənəvi akvaponik təsərrüfatlarda suyun fiziki-kimyəvi parametrlərinin (həll olmuş oksigen, pH, temperatur, TDS, bulanıqlıq və azot birləşmələri) monitorinqinin əllə aparılması kritik rejim pozuntularına və məhsuldarlıq itkisinə səbəb olur.
                </p>
                <p>
                  Təqdim olunan <strong>AquaMind-AI</strong> platforması IoT mikrokontrollerləri (ESP32), dəqiq sənaye tipli sensor şəbəkəsi və maşın öyrənməsi alqoritmlərini (Random Forest Regressor, Isolation Forest və Harmonik Sinusoidal Termal Modelləşdirmə) inteqrasiya edərək tam avtomatlaşdırılmış qapalı dövriyyəli idarəetmə təmin edir. Xəzər hövzəsinin iqlim xüsusiyyətlərinə və regional balıq növlərinə (Kür Nərəsi — <em>Acipenser baerii</em>, Nil Tilapiyası — <em>Oreochromis niloticus</em> və Göyqurşağı Foreli — <em>Oncorhynchus mykiss</em>) adaptasiya olunmuş model suyun temperatur dinamikasını <strong>$R^2 = 0.942$</strong> dəqiqliklə proqnozlaşdırır və anomaliyaları <strong>98.7%</strong> dəqiqliklə aşkar edir.
                </p>
              </div>
            </section>

            {/* SCIENTIFIC EQUATIONS & BIOCHEMICAL FOUNDATIONS */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span>🔬</span>
                <span>Riyazi Modellər və Biomühəndislik Qanunauyğunluqları</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Equation 1: Diurnal Temp */}
                <div className="p-4 rounded-xl bg-[#0a1628]/70 border border-[#38bdf8]/20 space-y-2">
                  <h3 className="font-bold text-[#38bdf8] text-sm">1. Harmonik Sutkalıq Termal Tənlik</h3>
                  <p className="text-[#94a3b8]">
                    Sutka ərzində suyun istilik tutumu və mühit temperaturu arasındakı gecikmə fazasını modelləşdirən funksiya:
                  </p>
                  <div className="p-3 rounded-lg bg-[#030f1a] font-mono text-[#38bdf8] text-center text-xs overflow-x-auto">
                    T(t) = T_mean + A · sin((2π · (t - t_peak)) / 24)
                  </div>
                  <p className="text-[11px] text-[#64748b]">
                    Burada <em>T_mean</em> orta sutkalıq temperatur, <em>A</em> sutkalıq dalğalanma amplitudası, <em>t_peak</em> isə maksimum istilik saatıdır (14:00 - 15:30).
                  </p>
                </div>

                {/* Equation 2: Dissolved Oxygen */}
                <div className="p-4 rounded-xl bg-[#0a1628]/70 border border-[#38bdf8]/20 space-y-2">
                  <h3 className="font-bold text-[#38bdf8] text-sm">2. Həll Olmuş Oksigen Doyma Tarazlığı</h3>
                  <p className="text-[#94a3b8]">
                    Henry Qanunu və Benson-Krause tənliyi əsasında temperaturdan asılı oksigen doyması:
                  </p>
                  <div className="p-3 rounded-lg bg-[#030f1a] font-mono text-emerald-400 text-center text-xs overflow-x-auto">
                    DO_sat = (14.652 - 0.41022·T + 0.007991·T² - 0.000077774·T³) / (1 + 0.000035·S)
                  </div>
                  <p className="text-[11px] text-[#64748b]">
                    Temperatur artdıqca suda həll olan oksigenin qatılığı kəskin azalır və sistem aerator klapanlarını avtomatik işə salır.
                  </p>
                </div>
              </div>
            </section>

            {/* SPECIES TOLERANCE MATRIX */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span>🐟</span>
                <span>Balıq Növləri üzrə Ekoloji Monitorinq Matrisi</span>
              </h2>

              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#0a1628] text-[#38bdf8] font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3 border-b border-white/10">Növ (Elmi adı)</th>
                      <th className="p-3 border-b border-white/10">Optimal Temp (°C)</th>
                      <th className="p-3 border-b border-white/10">Həll Olmuş Oksigen (mg/L)</th>
                      <th className="p-3 border-b border-white/10">pH Aralığı</th>
                      <th className="p-3 border-b border-white/10">Simbiotik Bitkilər</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#cbd5e1]">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-white">Kür Nərəsi (<em>Acipenser baerii</em>)</td>
                      <td className="p-3 font-mono text-[#38bdf8]">20.0 - 24.0 °C</td>
                      <td className="p-3 font-mono text-emerald-400">&gt; 6.5 mg/L</td>
                      <td className="p-3 font-mono text-amber-300">7.0 - 8.0</td>
                      <td className="p-3">Kahı, Nanə, Reyhan</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-white">Nil Tilapiyası (<em>Oreochromis niloticus</em>)</td>
                      <td className="p-3 font-mono text-[#38bdf8]">25.0 - 29.5 °C</td>
                      <td className="p-3 font-mono text-emerald-400">&gt; 5.0 mg/L</td>
                      <td className="p-3 font-mono text-amber-300">6.5 - 8.2</td>
                      <td className="p-3">Xiyar, Pomidor, Bibər</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-white">Göyqurşağı Foreli (<em>Oncorhynchus mykiss</em>)</td>
                      <td className="p-3 font-mono text-[#38bdf8]">14.0 - 17.5 °C</td>
                      <td className="p-3 font-mono text-emerald-400">&gt; 7.5 mg/L</td>
                      <td className="p-3 font-mono text-amber-300">6.8 - 7.8</td>
                      <td className="p-3">İspanaq, Göyərti, Çiyələk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* BIBTEX CITATION CARD */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <span>📚</span>
                <span>Akademik İstinad (BibTeX Citation)</span>
              </h2>
              <div className="p-4 rounded-xl bg-[#030f1a] border border-white/10 font-mono text-xs text-[#cbd5e1] overflow-x-auto">
                <pre>{`@article{hajizade2026aquamind,
  author    = {Hajizade, Suleyman},
  title     = {AquaMind-AI: An Intelligent IoT and Machine Learning Framework for Closed-Loop Smart Aquaponics},
  journal   = {Research Journal of Adaptive Agriculture and Aquaculture (RJAAA)},
  year      = {2026},
  publisher = {Western Caspian University Press},
  keywords  = {Smart Aquaponics, IoT, Machine Learning, Random Forest, Anomaly Detection, Water Quality},
  url       = {https://aquamindai.github.io/research/}
}`}</pre>
              </div>
            </section>

            {/* CTA SECTION */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#0a1628] via-rose-950/20 to-[#0a1628] border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>🔒</span>
                  <span>Məqalənin Tam Mətni və Eksperimental Datalara Giriş</span>
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  Peer-review, birgə elmi tədqiqat və xam telemetriya bazasına çıxış əldə etmək üçün elektron poçtla müraciət edin.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href="/access/"
                  className="px-4 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#0284c7] text-[#030f1a] hover:text-white font-bold text-xs transition-all shadow-lg shadow-[#38bdf8]/20 text-center w-full md:w-auto">
                  Giriş İcazəsi Qaydaları ↗
                </a>
              </div>
            </div>

          </article>

          {/* FOOTER */}
          <Footer />

        </div>
      </div>
    </>
  );
}
