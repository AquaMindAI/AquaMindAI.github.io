import React from 'react';

interface NavbarProps {
  active?: 'dashboard' | 'research' | 'architecture' | 'wiki' | 'access';
  isLive?: boolean;
  rightContent?: React.ReactNode;
}

export default function Navbar({ active = 'dashboard', isLive = true, rightContent }: NavbarProps) {
  const navItems = [
    { id: 'dashboard', label: 'İdarəetmə Paneli', href: '/', icon: '📊' },
    { id: 'research', label: 'Elmi Tədqiqat', href: '/research/', icon: '📄' },
    { id: 'architecture', label: 'Arxitektura', href: '/architecture/', icon: '🏛️' },
    { id: 'wiki', label: 'Bilik Bazası (Wiki)', href: '/wiki/', icon: '📚' },
    { id: 'access', label: 'Məxfi Data & Giriş', href: '/access/', icon: '🔒' }
  ];

  return (
    <header className="glass p-5 md:p-6 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-2xl border border-[#38bdf8]/20 bg-[#071322]/90 backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
        <a href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.01]">
          <span className="text-3xl md:text-4xl filter drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">🌊</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-extrabold gradient-text tracking-tight">AquaMind AI</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8]">v2.0</span>
            </div>
            <p className="text-xs text-[#94a3b8] mt-0.5 font-medium">
              Ağıllı Akvakültür və Akvaponika Monitorinq Platforması · Azərbaycan
            </p>
          </div>
        </a>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Əsas Naviqasiya" className="w-full lg:w-auto">
        <ul className="flex flex-wrap items-center gap-1.5 md:gap-2">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#38bdf8] text-[#030f1a] shadow-lg shadow-[#38bdf8]/30 font-bold'
                      : 'text-[#cbd5e1] hover:text-[#38bdf8] hover:bg-[#38bdf8]/10 border border-transparent hover:border-[#38bdf8]/20'
                  }`}
                  aria-current={isActive ? 'page' : undefined}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Badges & Actions */}
      <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-start lg:justify-end">
        {rightContent ? (
          rightContent
        ) : (
          <>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1628] border border-[#38bdf8]/30 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping"></span>
              <span className="text-[#38bdf8] font-medium">
                {isLive ? 'Canlı Telemetriya' : 'Sistem Aktiv'}
              </span>
            </div>

            <a
              href="/access/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-semibold text-rose-300 transition-all shadow-sm"
              title="Məxfi datalara və əsas repozitoriyaya giriş üçün müraciət edin">
              <span>🔒 Private Data</span>
            </a>

            <a
              href="https://github.com/AquaMindAI/AquaMindAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a1628] hover:bg-[#1e3a5f] border border-white/10 hover:border-[#38bdf8]/40 text-xs font-semibold text-slate-300 transition-all"
              title="GitHub Təşkilatı və Əsas Kod Bazasını Nəzərdən Keçirin">
              <span>🐙 GitHub</span>
            </a>
          </>
        )}
      </div>
    </header>
  );
}
