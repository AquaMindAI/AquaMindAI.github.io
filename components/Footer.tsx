import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 pb-10 border-t border-white/10 space-y-6 text-[#94a3b8] text-xs">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Col 1: About */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <span className="text-base font-bold text-white tracking-tight">AquaMind AI</span>
          </div>
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Azərbaycan Respublikasında qapalı dövriyyəli akvakültür (RAS) və ağıllı akvaponika sistemləri üçün IoT sensor telemetriyası və Süni İntellekt əsaslı qərar qəbuletmə platforması.
          </p>
          <p className="text-[11px] text-[#cbd5e1]">
            Elmi Tədqiqat: <strong>RJAAA</strong> (Research Journal of Adaptive Agriculture and Aquaculture).
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Naviqasiya</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/" className="hover:text-[#38bdf8] transition-colors">📊 İdarəetmə Paneli (Dashboard)</a>
            </li>
            <li>
              <a href="/research/" className="hover:text-[#38bdf8] transition-colors">📄 Elmi Məqalə və Tədqiqat</a>
            </li>
            <li>
              <a href="/architecture/" className="hover:text-[#38bdf8] transition-colors">🏛️ Sistem Arxitekturası &amp; IoT</a>
            </li>
            <li>
              <a href="/wiki/" className="hover:text-[#38bdf8] transition-colors">📚 Bilik Bazası &amp; Sənədlər</a>
            </li>
            <li>
              <a href="/access/" className="hover:text-[#38bdf8] transition-colors">🔒 Məxfi Məlumat Girişi</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Research & Author */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Müəllif və Elm</h4>
          <p className="text-xs text-[#cbd5e1]">
            <strong className="text-white">Süleyman Hacızadə</strong> (Suleyman Hajizade)
          </p>
          <p className="text-[11px] leading-relaxed">
            Qərbi Kaspi Universiteti (Western Caspian University) — Təbiət Elmləri Kafedrası &amp; AR Elm və Təhsil Nazirliyi Molekulyar Biologiya və Biotexnologiyalar İnstitutu.
          </p>
          <div className="space-y-1 text-[11px]">
            <div>🆔 ORCID: <a href="https://orcid.org/0009-0003-7842-1921" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline">0009-0003-7842-1921</a></div>
            <div>📜 WoS ResearcherID: <span className="text-[#38bdf8]">NNH-0485-2025</span></div>
          </div>
        </div>

        {/* Col 4: Private Data & Access */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>🔒</span>
            <span>Məxfi Məlumat Girişi</span>
          </h4>
          <p className="text-[11px] text-[#cbd5e1] leading-relaxed">
            Əsas monorepo, AI modelləri, mikrokontroller firmware və xam elmi telemetriya məxfidir (Private). Giriş əldə etmək üçün müraciət edin:
          </p>
          <div className="space-y-1.5">
            <a
              href="mailto:suleyman.hacizade1@gmail.com?subject=AquaMind%20AI%20-%20Data%20Access%20Request"
              className="inline-flex items-center gap-1.5 text-xs text-[#38bdf8] hover:underline font-semibold">
              <span>✉️</span>
              <span>suleyman.hacizade1@gmail.com</span>
            </a>
            <br />
            <a
              href="mailto:suleyman.hacizade.232bioing@wcu.edu.az?subject=AquaMind%20AI%20-%20Academic%20Access%20Request"
              className="inline-flex items-center gap-1.5 text-[11px] text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              <span>🎓</span>
              <span>suleyman.hacizade.232bioing@wcu.edu.az</span>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-[#94a3b8]">
          © {new Date().getFullYear()} <strong>AquaMind AI</strong> · Süleyman Hacızadə. Müəllif hüquqları qorunur. Apache License 2.0.
        </p>
        <p className="text-[11px] text-[#64748b]">
          Bakı, Azərbaycan Respublikası · Next.js 14 · FastAPI · Scikit-Learn · ESP32 IoT
        </p>
      </div>
    </footer>
  );
}
