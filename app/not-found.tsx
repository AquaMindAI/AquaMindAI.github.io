import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030f1a] text-[#e2e8f0] p-4 md:p-8 font-sans selection:bg-[#38bdf8]/30">
      <div className="max-w-4xl mx-auto space-y-8">
        <Navbar active="dashboard" isLive={false} />

        <main className="glass p-8 md:p-14 rounded-2xl border border-white/10 bg-[#071322]/85 text-center space-y-6 shadow-2xl">
          <div className="text-6xl md:text-8xl font-black text-[#38bdf8] tracking-widest">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Səhifə Tapılmadı (Page Not Found)
            </h1>
            <p className="text-sm text-[#94a3b8] max-w-md mx-auto">
              Axtardığınız səhifə mövcud deyil, adı dəyişdirilib və ya başqa ünvana köçürülüb.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/"
              className="px-5 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#0284c7] text-[#030f1a] hover:text-white font-bold text-xs transition-all shadow-lg shadow-[#38bdf8]/20">
              📊 İdarəetmə Panelinə Qayıt
            </a>
            <a
              href="/research/"
              className="px-5 py-2.5 rounded-xl bg-[#0a1628] hover:bg-[#1e3a5f] border border-white/10 text-[#cbd5e1] font-semibold text-xs transition-all">
              📄 Elmi Tədqiqat Məqaləsi
            </a>
            <a
              href="/architecture/"
              className="px-5 py-2.5 rounded-xl bg-[#0a1628] hover:bg-[#1e3a5f] border border-white/10 text-[#cbd5e1] font-semibold text-xs transition-all">
              🏛️ Sistem Arxitekturası
            </a>
            <a
              href="/access/"
              className="px-5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-semibold text-xs transition-all">
              🔒 Məxfi Giriş İcazəsi
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
