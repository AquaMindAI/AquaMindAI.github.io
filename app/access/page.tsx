import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Məxfi Məlumatlar və Giriş İcazəsi — AquaMind AI Access Policy',
  description: 'AquaMind AI əsas elmi dataları, AI modelləri, mikrokontroller firmware və monorepo mənbə kodu məxfidir (Private). Giriş (access) üçün müraciət qaydaları və rəsmi əlaqə e-poçtları.',
  keywords: [
    'AquaMind AI Access',
    'AquaMind Private Data',
    'Məxfi Məlumat Girişi',
    'AquaMind Əlaqə',
    'Süleyman Hacızadə Əlaqə',
    'Suleyman Hajizade Email',
    'Western Caspian University Bioengineering',
    'Qərbi Kaspi Universiteti',
    'Akvakultura Tədqiqatçı Girişi',
    'suleyman.hacizade1@gmail.com',
    'suleyman.hacizade.232bioing@wcu.edu.az'
  ],
  alternates: {
    canonical: 'https://aquamindai.github.io/access/'
  },
  openGraph: {
    title: 'Məxfi Məlumatlar və Giriş İcazəsi — AquaMind AI',
    description: 'Əsas datalar və mənbə kodları Private-dir. Elmi rəy, tərəfdaşlıq və giriş icazəsi üçün rəsmi müraciət qaydaları.',
    url: 'https://aquamindai.github.io/access/',
    siteName: 'AquaMind AI',
    type: 'website',
    images: [{ url: 'https://aquamindai.github.io/AquaMind-AI.png', width: 1200, height: 630 }]
  }
};

const accessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'AquaMind AI Data Access and Repository Permission Request',
  'description': 'Official portal and procedure for academic institutions and industry partners to request access to private research repositories, datasets, and machine learning models.',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'AquaMind AI',
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'email': 'suleyman.hacizade1@gmail.com',
        'contactType': 'primary research contact'
      },
      {
        '@type': 'ContactPoint',
        'email': 'suleyman.hacizade.232bioing@wcu.edu.az',
        'contactType': 'academic contact'
      }
    ]
  },
  'url': 'https://aquamindai.github.io/access/'
};

export default function AccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessJsonLd) }}
      />
      <div className="min-h-screen bg-[#030f1a] text-[#e2e8f0] p-4 md:p-8 font-sans selection:bg-[#38bdf8]/30">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* NAVBAR */}
          <Navbar active="access" isLive={false} />

          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] flex items-center gap-2">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">Əsas Səhifə</a>
            <span>/</span>
            <span className="text-[#38bdf8] font-medium">Məxfi Məlumatlar və Giriş İcazəsi</span>
          </nav>

          {/* HERO BANNER */}
          <header className="glass p-6 md:p-10 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-[#0a1628] via-rose-950/25 to-[#0a1628] shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 border border-rose-500/40 text-rose-300">
                🔒 Data Privacy &amp; Access Protocol
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#030f1a] border border-white/10 text-slate-300">
                Official Policy
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Məlumatların Məxfiliyi və Giriş İcazəsi (Private Data Policy)
            </h1>

            <p className="text-xs md:text-sm text-[#cbd5e1] max-w-3xl leading-relaxed">
              AquaMind AI platformasının əsas elmi tədqiqat telemetriyası, AI modellərinin çəki faylları, mikrokontroller C++ firmware mənbə kodları və arxa plan monoreposu (<code className="text-[#38bdf8] font-mono">AquaMindAI/AquaMindAI</code>) əqli mülkiyyət və elmi təhlükəsizlik məqsədilə <strong>məxfidir (Private)</strong>.
            </p>
          </header>

          {/* FAST-TRACK CONTACT ACTION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Primary Email */}
            <div className="glass p-6 rounded-2xl border border-[#38bdf8]/30 bg-[#071322]/90 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-2xl text-[#38bdf8]">✉️</span>
                <div>
                  <h3 className="text-base font-bold text-white">Əsas Tədqiqatçı E-poçtu</h3>
                  <p className="text-xs text-[#94a3b8]">Birbaşa müraciət və tərəfdaşlıq üçün</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#030f1a] font-mono text-xs text-[#38bdf8] break-all border border-white/5 select-all">
                suleyman.hacizade1@gmail.com
              </div>

              <a
                href="mailto:suleyman.hacizade1@gmail.com?subject=AquaMind%20AI%20-%20Private%20Data%20%26%20Repository%20Access%20Request&body=Salam%20S%C3%BCleyman%20b%C9%99y,%0A%0AAquaMind%20AI%20layih%C9%99sinin%20m%C9%99xfi%20datalar%C4%B1na%20v%C9%99%20reposuna%20giri%C5%9F%20icaz%C9%99si%20ist%C9%99yir%C9%99m.%0A%0AAd%20v%C9%99%20Soyad:%20%0AQurum%20/%20Universitet:%20%0AM%C9%99qs%C9%99d:%20%0AGitHub%20istifad%C9%99%C3%A7i%20ad%C4%B1:%20%0A%0AT%C9%99%C5%9F%C9%99kk%C3%BCr%20edir%C9%99m."
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#38bdf8] hover:bg-[#0284c7] text-[#030f1a] hover:text-white font-bold text-xs transition-all shadow-lg shadow-[#38bdf8]/20">
                <span>✉️</span>
                <span>Bu E-poçtla Müraciət Göndərin</span>
              </a>
            </div>

            {/* Card 2: Academic Email */}
            <div className="glass p-6 rounded-2xl border border-purple-500/30 bg-[#071322]/90 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-2xl text-purple-400">🎓</span>
                <div>
                  <h3 className="text-base font-bold text-white">Akademik və Universitet Əlaqəsi</h3>
                  <p className="text-xs text-[#94a3b8]">Universitetlər və elmi jurnallar üçün</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#030f1a] font-mono text-xs text-purple-300 break-all border border-white/5 select-all">
                suleyman.hacizade.232bioing@wcu.edu.az
              </div>

              <a
                href="mailto:suleyman.hacizade.232bioing@wcu.edu.az?subject=AquaMind%20AI%20-%20Academic%20Access%20Request%20(RJAAA)&body=H%C3%B6rm%C9%99tli%20S%C3%BCleyman%20Hac%C4%B1zad%C9%99,%0A%0AAkademik%20t%C9%99dqiqat%20v%C9%99%20elmi%20r%C9%99y%20m%C9%99qs%C9%99dil%C9%99%20AquaMind%20AI%20layih%C9%99sinin%20elmi%20datalar%C4%B1na%20giri%C5%9F%20%C3%BC%C3%A7%C3%BCn%20m%C3%BCraci%C9%99t%20edir%C9%99m.%0A%0AQurum:%20%0AT%C9%99dqiqat%20istiqam%C9%99ti:%20"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a1628] hover:bg-[#1e3a5f] border border-purple-500/30 text-purple-300 hover:text-white font-bold text-xs transition-all shadow-lg">
                <span>🎓</span>
                <span>Akademik E-poçtla Əlaqə Saxlayın</span>
              </a>
            </div>
          </div>

          {/* ACCESS CRITERIA & TIMELINE */}
          <section className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-[#071322]/80 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📋</span>
              <span>Giriş İcazəsi Təqdim Edilən Kateqoriyalar</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#030f1a] border border-white/5 space-y-2">
                <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                  <span>🔬</span>
                  <span>1. Elmi Tədqiqat və Peer-Review</span>
                </div>
                <p className="text-[#94a3b8] leading-relaxed">
                  <em>Research Journal of Adaptive Agriculture and Aquaculture</em> (RJAAA) və digər beynəlxalq jurnallarda rəyçilər (reviewers) və birgə akademik tədqiqatçılar üçün replikasiya paketi dərhal təqdim olunur.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#030f1a] border border-white/5 space-y-2">
                <div className="text-[#38bdf8] font-bold text-sm flex items-center gap-1.5">
                  <span>🏛️</span>
                  <span>2. Universitet Əməkdaşlığı</span>
                </div>
                <p className="text-[#94a3b8] leading-relaxed">
                  Qərbi Kaspi Universiteti və digər ali təhsil müəssisələrinin magistr, doktorant və alimləri üçün laboratoriya təcrübələri çərçivəsində məlumat çıxışı təmin edilir.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#030f1a] border border-white/5 space-y-2">
                <div className="text-amber-400 font-bold text-sm flex items-center gap-1.5">
                  <span>🐟</span>
                  <span>3. Sənaye Tərəfdaşlığı</span>
                </div>
                <p className="text-[#94a3b8] leading-relaxed">
                  Akvakültür təsərrüfatları, balıqçılıq müəssisələri və kənd təsərrüfatı texnologiya şirkətləri ilə pilot tətbiq və pilot sınaq müqavilələri əsasında giriş verilir.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0a1628] border border-white/10 space-y-2 text-xs">
              <h3 className="font-bold text-white flex items-center gap-1.5">
                <span>⏱️</span>
                <span>Cavablandırma Müddəti</span>
              </h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                Müraciətlər adətən <strong>24 - 48 saat</strong> ərzində nəzərdən keçirilir. Giriş təsdiqləndikdən sonra müraciətçinin GitHub istifadəçi adı məxfi repozitoriyanın əməkdaşlar siyahısına əlavə edilir və müvafiq oxuma/yazma hüquqları aktivləşdirilir.
              </p>
            </div>
          </section>

          {/* FOOTER */}
          <Footer />

        </div>
      </div>
    </>
  );
}
