import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Bilik Bazası və Sənədlər (Wiki) — AquaMind AI',
  description: 'AquaMind AI ətraflı bilik bazası və sənədləşməsi: Akvakültür biologiyası, nitrifikasiya mexanizmləri, sensor kalibrasiya protokolları və AI anomaliya aşkarlama qaydaları.',
  keywords: [
    'AquaMind AI Wiki',
    'Akvaponika Bilik Bazası',
    'Akvakültür Dərsliyi',
    'Nitrifikasiya Bakteriyaları',
    'Nitrosomonas Nitrobacter',
    'pH Kalibrasiyası',
    'Oksigen Doyma Hesablanması',
    'Akvakultura Sensorları',
    'Süleyman Hacızadə',
    'Qərbi Kaspi Universiteti'
  ],
  alternates: {
    canonical: 'https://aquamindai.github.io/wiki/'
  },
  openGraph: {
    title: 'Bilik Bazası və Sənədlər (Wiki) — AquaMind AI',
    description: 'Ağıllı akvakültür, biofiltrasiya və IoT sensor kalibrasiyası üzrə zəngin bilik bazası.',
    url: 'https://aquamindai.github.io/wiki/',
    siteName: 'AquaMind AI',
    type: 'article',
    images: [{ url: 'https://aquamindai.github.io/AquaMind-AI.png', width: 1200, height: 630 }]
  }
};

const wikiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'AquaMind AI sistemi nə üçün istifadə olunur?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'AquaMind AI qapalı dövriyyəli akvakültür (RAS) və akvaponika təsərrüfatlarında suyun keyfiyyət parametrlərini (həll olmuş oksigen, pH, temperatur, TDS, bulanıqlıq) IoT sensorları ilə fasiləsiz ölçən və Süni İntellekt vasitəsilə kritik anomaliyaları əvvəlcədən proqnozlaşdıran avtomatlaşdırılmış idarəetmə platformasıdır.'
      }
    },
    {
      '@type': 'Question',
      'name': 'AquaMind AI hansı balıq növləri üçün optimallaşdırılıb?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Sistem Kür Nərəsi (Acipenser baerii), Nil Tilapiyası (Oreochromis niloticus) və Göyqurşağı Foreli (Oncorhynchus mykiss) kimi əsas kommersiya növlərinin fizioloji tələblərinə uyğunlaşdırılmışdır.'
      }
    },
    {
      '@type': 'Question',
      'name': 'AquaMind AI mənbə kodlarına və elmi datalara necə daxil olmaq olar?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Əsas datalar və kod bazası elmi əqli mülkiyyət məqsədilə Private-dir. Giriş icazəsi (access) əldə etmək üçün suleyman.hacizade1@gmail.com və ya akademik ünvan suleyman.hacizade.232bioing@wcu.edu.az vasitəsilə müraciət edilə bilər.'
      }
    },
    {
      '@type': 'Question',
      'name': 'AquaMind AI hansı maşın öyrənməsi modellərindən istifadə edir?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Sistem Scikit-Learn kitabxanasında qurulmuş Random Forest Regressor (su temperaturunun 1, 3 və 6 saatlıq proqnozu üçün, R² = 0.942) və Isolation Forest (anomaliyaların və sensör nasazlıqlarının aşkarlanması üçün) alqoritmlərindən istifadə edir.'
      }
    }
  ]
};

export default function WikiPage() {
  const sections = [
    {
      title: '1. Qapalı Dövriyyəli Akvaponikada Azot Dövranı (Nitrification Cycle)',
      content: 'Balıqların ifrazatı nəticəsində suya ayrılan zəhərli ammonyak (NH3/NH4+) biofiltrdəki faydalı bakteriyalar tərəfindən iki mərhələdə zərərsizləşdirilir. Birinci mərhələdə Nitrosomonas bakteriyaları ammonyakı nitritə (NO2-), ikinci mərhələdə isə Nitrobacter bakteriyaları nitriti nitrata (NO3-) çevirir. Nitrat isə bitki kökləri tərəfindən təbii gübrə kimi mənimsənilir və təmizlənmiş su yenidən balıq hovuzlarına qayıdır.'
    },
    {
      title: '2. Həll Olmuş Oksigen (DO) və Temperatur Əlaqəsi',
      content: 'Suyun temperaturu yüksəldikcə oksigenin suda həllolma qabiliyyəti (doyma həddi) termodinamik qanunlara əsasən azalır. Məsələn, 15°C-də doymuş oksigen 10.1 mg/L olduğu halda, 28°C-də bu göstərici 7.8 mg/L-ə enir. AquaMind AI temperaturun artdığını qabaqcadan aşkar etdikdə aerator kompressorlarını işə salaraq balıqların boğulma riskini aradan qaldırır.'
    },
    {
      title: '3. pH Balansı və Bitki Qidalanması',
      content: 'Akvaponika sistemində ən həssas balans pH səviyyəsidir: balıqlar üçün optimal aralıq 6.5-8.0, bitkilər üçün 6.0-7.0, nitrifikasiya bakteriyaları üçün isə 7.0-8.0-dir. Buna görə də sistemin ideal kompromis nöqtəsi 6.8 - 7.2 pH aralığıdır. pH 6.0-dan aşağı düşdükdə bakteriyaların fəaliyyəti dayanır, 7.5-dən yuxarı qalxdıqda isə bitkilər dəmir (Fe) və fosforu mənimsəyə bilmir.'
    },
    {
      title: '4. Sensorların Sahəvi Kalibrasiya Protokolları',
      content: 'pH elektrodları hər 30 gündən bir standart pH 4.01, 7.00 və 10.01 bufer məhlulları ilə iki-nöqtəli kalibrasiya edilməlidir. Optik oksigen zondu isə 100% rütubətli hava mühitində (barometrik təzyiq nəzərə alınmaqla) 1-nöqtəli doymuş kalibrasiyadan keçirilir.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wikiJsonLd) }}
      />
      <div className="min-h-screen bg-[#030f1a] text-[#e2e8f0] p-4 md:p-8 font-sans selection:bg-[#38bdf8]/30">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* NAVBAR */}
          <Navbar active="wiki" isLive={false} />

          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] flex items-center gap-2">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">Əsas Səhifə</a>
            <span>/</span>
            <span className="text-[#38bdf8] font-medium">Bilik Bazası və Sənədlər</span>
          </nav>

          {/* HERO BANNER */}
          <header className="glass p-6 md:p-10 rounded-2xl border border-[#38bdf8]/20 bg-[#071322]/85 shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8]">
                Knowledge Base &amp; Technical Docs
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#030f1a] border border-white/10 text-slate-300">
                AquaMind AI Wiki
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Ağıllı Akvakültür və Biotexnologiya Bilik Bazası
            </h1>

            <p className="text-xs md:text-sm text-[#94a3b8] max-w-3xl leading-relaxed">
              Qapalı dövriyyəli akvaponika (RAS), biofiltrasiya mexanizmləri, sensorların kalibrasiya prosedurları və Süni İntellekt əsaslı anomaliya aşkarlama prinsipləri üzrə rəsmi istinad sənədi.
            </p>
          </header>

          {/* DOCUMENTATION SECTIONS */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📖</span>
              <span>Əsas Təlimat və Texniki Fəsillər</span>
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {sections.map((sec, idx) => (
                <article
                  key={idx}
                  className="glass p-6 rounded-2xl border border-white/10 bg-[#071322]/80 space-y-2 shadow-xl hover:border-[#38bdf8]/30 transition-all">
                  <h3 className="text-base font-bold text-white">{sec.title}</h3>
                  <p className="text-xs md:text-sm text-[#cbd5e1] leading-relaxed text-justify">
                    {sec.content}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* FAQ ACCORDION / LIST */}
          <section className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-[#071322]/80 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>❓</span>
              <span>Tez-tez Verilən Suallar (FAQ)</span>
            </h2>

            <div className="space-y-4">
              {wikiJsonLd.mainEntity.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#030f1a] border border-white/5 space-y-2">
                  <h3 className="font-bold text-sm text-[#38bdf8] flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-[#38bdf8]/15 border border-[#38bdf8]/30">Sual</span>
                    <span>{item.name}</span>
                  </h3>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed pl-7">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <Footer />

        </div>
      </div>
    </>
  );
}
