"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  generateLiveReading,
  generateHistoryReadings,
  computeSystemStatus,
  computeWaterForecast,
  computeActiveAlerts,
  setSimulationOffset,
  triggerSimulatedAlert,
  resetSimulation,
  resolveSimulatedAlert
} from '../lib/telemetry';

export default function Dashboard() {
  const [latest, setLatest] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [systemStatus, setSystemStatus] = useState<any>(null);
  const [waterForecast, setWaterForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [tab, setTab] = useState("water_temp");
  const [timeRange, setTimeRange] = useState("24");
  const [selectedPool, setSelectedPool] = useState("sturgeon");
  const [simulationMsg, setSimulationMsg] = useState<string | null>(null);

  const poolProfiles: Record<string, { name: string; species: string; plants: string; tempMin: number; tempMax: number }> = {
    sturgeon: {
      name: "Hovuz #1 — Əsas İntensiv RAS",
      species: "Kür Nərəsi (Acipenser)",
      plants: "Kahı, Nanə və Reyhan",
      tempMin: 20.0,
      tempMax: 26.0
    },
    tilapia: {
      name: "Hovuz #2 — İsti Su Bölməsi",
      species: "Nil Tilapiyası (Oreochromis)",
      plants: "Xiyar və Pomidor",
      tempMin: 25.0,
      tempMax: 30.0
    },
    trout: {
      name: "Hovuz #3 — Soyuq Dağ Suyu",
      species: "Göyqurşağı Foreli (Oncorhynchus)",
      plants: "İspanaq və Yaşıllıqlar",
      tempMin: 14.0,
      tempMax: 18.0
    }
  };

  const currentPool = poolProfiles[selectedPool];

  const fetchAll = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      let l = null, h = null, al = null, st = null, fc = null;
      try {
        const [resLatest, resHist, resAlerts, resStatus, resForecast] = await Promise.all([
          fetch('/api/sensors/latest').then(res => res.ok ? res.json() : null).catch(() => null),
          fetch(`/api/sensors/history?hours=${timeRange}`).then(res => res.ok ? res.json() : []).catch(() => []),
          fetch('/api/alerts/active').then(res => res.ok ? res.json() : []).catch(() => []),
          fetch('/api/predictions/system-status').then(res => res.ok ? res.json() : null).catch(() => null),
          fetch('/api/predictions/water-temp').then(res => res.ok ? res.json() : null).catch(() => null)
        ]);
        l = resLatest; h = resHist; al = resAlerts; st = resStatus; fc = resForecast;
      } catch (_) {}

      // Robust fallback for static GitHub Pages / client-side standalone execution:
      if (!l) {
        l = generateLiveReading();
        h = generateHistoryReadings(Number(timeRange) || 24);
        al = computeActiveAlerts(l);
        st = computeSystemStatus(l);
        fc = computeWaterForecast(l);
      }

      if (l) setLatest(l);
      if (Array.isArray(h)) setHistory(h);
      if (Array.isArray(al)) setAlerts(al);
      if (st) setSystemStatus(st);
      if (fc) setWaterForecast(fc);
    } catch (err) {
      console.error("Məlumat oxuma xətası:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [timeRange]);

  useEffect(() => {
    fetchAll();
    const interval = setInterval(() => fetchAll(false), 8000);
    return () => clearInterval(interval);
  }, [fetchAll]);

  const handleResolveAlert = async (id: number) => {
    try {
      await fetch(`/api/alerts/${id}/resolve`, { method: "POST" }).catch(() => null);
    } catch (_) {}
    resolveSimulatedAlert(id);
    setAlerts(prev => prev.filter(a => a.id !== id));
    fetchAll(false);
  };

  const handleSimulate = async (action: 'temp_spike' | 'level_drop' | 'reset') => {
    try {
      let msg = '';
      try {
        const res = await fetch('/api/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action })
        });
        if (res.ok) {
          const data = await res.json();
          msg = data.message || '';
        }
      } catch (_) {}

      if (!msg) {
        if (action === 'temp_spike') {
          setSimulationOffset(7.5, 0);
          triggerSimulatedAlert({
            id: Date.now(),
            pool_id: 1,
            timestamp: new Date().toISOString(),
            severity: 'critical',
            sensor: 'DS18B20 (Simulyasiya)',
            message: 'Kritik Su Temperaturu Artımı! Isıdıcı və ya günəş radiasiyası normanı aşır.',
            value: 32.5,
            threshold_min: 22,
            threshold_max: 30,
            resolved: false
          });
          msg = 'Temperatur artımı simulyasiyası aktiv edildi';
        } else if (action === 'level_drop') {
          setSimulationOffset(0, -45);
          triggerSimulatedAlert({
            id: Date.now(),
            pool_id: 1,
            timestamp: new Date().toISOString(),
            severity: 'critical',
            sensor: 'HC-SR04 (Simulyasiya)',
            message: 'Kritik Su Səviyyəsi Azalması! Su sızması və ya nasos dayanması ehtimalı.',
            value: 39.0,
            threshold_min: 50,
            threshold_max: 120,
            resolved: false
          });
          msg = 'Su səviyyəsi azalması simulyasiyası aktiv edildi';
        } else if (action === 'reset') {
          resetSimulation();
          msg = 'Bütün parametrlər normal rejimə qaytarıldı';
        }
      }

      setSimulationMsg(msg);
      setTimeout(() => setSimulationMsg(null), 4000);
      fetchAll(true);
    } catch (err) {
      console.error(err);
    }
  };

  const chartData = (Array.isArray(history) ? history : []).map((item: any) => ({
    time: new Date(item.timestamp).toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' }),
    water_temp: item.water_temp_c,
    water_level: item.water_level_cm,
    air_temp: item.air_temp_c,
    humidity: item.air_humidity_pct,
    oxygen: item.dissolved_oxygen_mg_l || 7.2,
    ph: item.ph_level || 7.4
  }));

  const getTempColor = (t: number) => {
    if (t > currentPool.tempMax + 4 || t < currentPool.tempMin - 4) return '#ef4444';
    if (t > currentPool.tempMax || t < currentPool.tempMin) return '#f59e0b';
    return '#22c55e';
  };

  const getLevelColor = (l: number) => {
    if (l < 40 || l > 120) return '#ef4444';
    if (l < 60 || l > 105) return '#f59e0b';
    return '#38bdf8';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030f1a] flex flex-col items-center justify-center text-[#38bdf8] p-4">
        <div className="w-16 h-16 border-4 border-[#38bdf8]/20 border-t-[#38bdf8] rounded-full animate-spin mb-4"></div>
        <h2 className="text-2xl font-bold tracking-wide">AquaMind AI Yüklənir...</h2>
        <p className="text-sm text-[#94a3b8] mt-2">Akvakültür telemetriya axını başladılır</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030f1a] text-[#e2e8f0] p-4 md:p-8 font-sans selection:bg-[#38bdf8]/30">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* TOP BANNER / NAVIGATION */}
        <header className="glass p-6 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🌊</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight">AquaMind AI</h1>
                <p className="text-xs md:text-sm text-[#94a3b8] mt-1">
                  Ağıllı Akvakültür və Akvaponika Monitorinq Platforması — Azərbaycan Respublikası
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
            {/* Deployment / Mode Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1628] border border-[#38bdf8]/30 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping"></span>
              <span className="text-[#38bdf8] font-medium">
                {systemStatus?.mode === 'live_backend' ? 'Fiziki IoT Backend Qoşulub' : 'Bulud Rejimi (Canlı Demo)'}
              </span>
            </div>

            {/* Cloud Ready Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-xs font-medium text-[#38bdf8]">
              <span>🌊 GitHub Pages Live</span>
            </div>

            {/* Private Data & Access Request Badge */}
            <a
              href="mailto:suleyman.hacizade1@gmail.com?subject=AquaMind%20AI%20-%20Private%20Data%20%26%20Repository%20Access%20Request"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-semibold text-rose-300 transition-all"
              title="Məxfi datalara və əsas repozitoriyaya giriş üçün müraciət edin">
              <span>🔒 Private Data · Access Müraciət</span>
            </a>

            {/* Refresh Button */}
            <button
              onClick={() => fetchAll(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/30 text-xs font-semibold text-[#38bdf8] transition-all disabled:opacity-50">
              <span className={refreshing ? 'animate-spin' : ''}>🔄</span>
              <span>{refreshing ? 'Yenilənir...' : 'Yenilə'}</span>
            </button>
          </div>
        </header>

        {/* POOL & SPECIES SELECTOR BAR */}
        <div className="glass p-4 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-sm font-semibold text-[#94a3b8] uppercase tracking-wider">Hovuz:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-auto">
              {Object.entries(poolProfiles).map(([key, p]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPool(key)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    selectedPool === key
                      ? 'bg-[#38bdf8] text-[#030f1a] font-bold shadow-lg shadow-[#38bdf8]/20'
                      : 'bg-[#0a1628] text-[#94a3b8] hover:bg-[#1e3a5f] hover:text-white'
                  }`}>
                  {p.name.split('—')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-right text-[#94a3b8] hidden md:block">
            <span className="text-[#38bdf8] font-semibold">{currentPool.species}</span> | {currentPool.plants} | Optimal: {currentPool.tempMin}°C - {currentPool.tempMax}°C
          </div>
        </div>

        {/* SIMULATION CONTROLS BAR (FOR INTERACTIVE TESTING) */}
        <div className="glass p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-amber-400 font-bold text-sm">⚡ Simulyasiya və Sınaq Paneli:</span>
            <span className="text-[#94a3b8] hidden sm:inline">Canlı anomaliyaları və AI reaksiyasını birbaşa test edin:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleSimulate('temp_spike')}
              className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-xs font-medium text-red-300 transition">
              🌡️ +8°C Temperatur Qızması
            </button>
            <button
              onClick={() => handleSimulate('level_drop')}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-medium text-amber-300 transition">
              💧 -45cm Su Sızması
            </button>
            <button
              onClick={() => handleSimulate('reset')}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-medium text-emerald-300 transition">
              ✓ Normal Rejimə Qaytar
            </button>
          </div>
        </div>

        {simulationMsg && (
          <div className="p-3 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg text-center text-xs text-[#38bdf8] animate-bounce">
            ℹ️ {simulationMsg}
          </div>
        )}

        {/* PRIMARY SENSOR METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 1. Su Temperaturu (DS18B20) */}
          <div className="glass p-6 rounded-2xl card-hover relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Su Temperaturu</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <h2 className="text-4xl font-extrabold" style={{ color: latest ? getTempColor(latest.water_temp_c) : '#fff' }}>
                    {latest?.water_temp_c?.toFixed(1) || '--'}°C
                  </h2>
                  {waterForecast && (
                    <span className={`text-base font-bold ${
                      waterForecast.trend === 'rising' ? 'text-red-400' : waterForecast.trend === 'falling' ? 'text-sky-400' : 'text-emerald-400'
                    }`}>
                      {waterForecast.trend === 'rising' ? '▲ Artır' : waterForecast.trend === 'falling' ? '▼ Düşür' : '● Sabit'}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-2xl p-2 bg-[#0a1628] rounded-xl border border-white/5">🌊</span>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs text-[#94a3b8]">
              <span>Sensor: DS18B20</span>
              <span className="text-emerald-400">Hədəf: {currentPool.tempMin}–{currentPool.tempMax}°C</span>
            </div>
          </div>

          {/* 2. Su Səviyyəsi (HC-SR04) */}
          <div className="glass p-6 rounded-2xl card-hover relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Su Səviyyəsi</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <h2 className="text-4xl font-extrabold" style={{ color: latest ? getLevelColor(latest.water_level_cm) : '#fff' }}>
                    {latest?.water_level_cm?.toFixed(1) || '--'}
                    <span className="text-xl font-normal text-[#94a3b8] ml-1">cm</span>
                  </h2>
                </div>
              </div>
              <span className="text-2xl p-2 bg-[#0a1628] rounded-xl border border-white/5">📏</span>
            </div>
            <div className="w-full bg-[#0a1628] h-2.5 mt-3 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-blue-400 transition-all duration-1000"
                style={{ width: `${Math.min(100, Math.max(5, ((latest?.water_level_cm || 0) / 120) * 100))}%` }}>
              </div>
            </div>
            <div className="mt-3 flex justify-between text-xs text-[#94a3b8]">
              <span>Ultrasəs HC-SR04</span>
              <span>Normal: 60–100 cm</span>
            </div>
          </div>

          {/* 3. Hava Şəraiti (DHT11/22) */}
          <div className="glass p-6 rounded-2xl card-hover relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Ətraf Hava Şəraiti</p>
                <div className="flex items-baseline gap-4 mt-2">
                  <div>
                    <span className="text-2xl font-bold text-white">{latest?.air_temp_c?.toFixed(1) || '--'}°C</span>
                    <p className="text-[10px] text-[#94a3b8]">Hava Temp</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <span className="text-2xl font-bold text-[#38bdf8]">{latest?.air_humidity_pct?.toFixed(1) || '--'}%</span>
                    <p className="text-[10px] text-[#94a3b8]">Rütubət</p>
                  </div>
                </div>
              </div>
              <span className="text-2xl p-2 bg-[#0a1628] rounded-xl border border-white/5">🌤️</span>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs text-[#94a3b8]">
              <span>Sensor: DHT22</span>
              <span className="text-emerald-400">Opt: 20-28°C / 60-80%</span>
            </div>
          </div>

          {/* 4. Oksigen və pH İndikatoru */}
          <div className="glass p-6 rounded-2xl card-hover relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">Su Keyfiyyəti (DO / pH)</p>
                <div className="flex items-baseline gap-4 mt-2">
                  <div>
                    <span className="text-2xl font-bold text-emerald-400">{latest?.dissolved_oxygen_mg_l?.toFixed(1) || '7.4'}</span>
                    <p className="text-[10px] text-[#94a3b8]">DO (mg/L)</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <span className="text-2xl font-bold text-sky-300">{latest?.ph_level?.toFixed(2) || '7.35'}</span>
                    <p className="text-[10px] text-[#94a3b8]">pH Dərəcəsi</p>
                  </div>
                </div>
              </div>
              <span className="text-2xl p-2 bg-[#0a1628] rounded-xl border border-white/5">🧪</span>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs text-[#94a3b8]">
              <span>Aerasiya Statusu</span>
              <span className="text-emerald-400">Optimal Balans</span>
            </div>
          </div>

        </div>

        {/* AI PREDICTION ENGINE CARD */}
        <div className="glass p-6 rounded-2xl border border-[#38bdf8]/30 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <div>
              <h3 className="text-lg font-bold text-[#38bdf8] flex items-center gap-2">
                <span>🤖</span> AquaMind AI Temperatur Proqnozu
              </h3>
              <p className="text-xs text-[#94a3b8] mt-0.5">
                Scikit-Learn Random Forest alqoritmi əsasında növbəti saatlar üçün su istiliyi dinamikası
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              Model İnamı: {((waterForecast?.confidence || 0.88) * 100).toFixed(0)}%
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-[#0a1628]/80 rounded-xl border border-white/5">
              <p className="text-[#94a3b8] text-xs font-medium mb-1">Cari Su Temp</p>
              <p className="text-2xl font-extrabold text-white">{waterForecast?.current ?? latest?.water_temp_c ?? '--'}°C</p>
              <p className="text-[10px] text-emerald-400 mt-1">İlkin baza</p>
            </div>

            <div className="p-4 bg-[#0a1628]/80 rounded-xl border border-[#38bdf8]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#38bdf8]"></div>
              <p className="text-[#94a3b8] text-xs font-medium mb-1">+1 Saat Sonra</p>
              <p className="text-2xl font-extrabold text-[#38bdf8]">{waterForecast?.predicted_1h ?? '--'}°C</p>
              <p className="text-[10px] text-[#94a3b8] mt-1">Qısa müddətli proqnoz</p>
            </div>

            <div className="p-4 bg-[#0a1628]/80 rounded-xl border border-[#38bdf8]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#38bdf8] opacity-70"></div>
              <p className="text-[#94a3b8] text-xs font-medium mb-1">+3 Saat Sonra</p>
              <p className="text-2xl font-extrabold text-[#38bdf8]">{waterForecast?.predicted_3h ?? '--'}°C</p>
              <p className="text-[10px] text-[#94a3b8] mt-1">Orta tendensiya</p>
            </div>

            <div className="p-4 bg-[#0a1628]/80 rounded-xl border border-[#38bdf8]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#38bdf8] opacity-40"></div>
              <p className="text-[#94a3b8] text-xs font-medium mb-1">+6 Saat Sonra</p>
              <p className="text-2xl font-extrabold text-[#38bdf8]">{waterForecast?.predicted_6h ?? '--'}°C</p>
              <p className="text-[10px] text-[#94a3b8] mt-1">Uzunmüddətli trend</p>
            </div>
          </div>
        </div>

        {/* CHARTS AND ALERTS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* TELEMETRY CHART */}
          <div className="glass p-6 rounded-2xl lg:col-span-2 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              {/* Metric Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                {[
                  { id: 'water_temp', label: 'Su Temp (°C)' },
                  { id: 'water_level', label: 'Su Səviyyəsi (cm)' },
                  { id: 'air_temp', label: 'Hava Temp (°C)' },
                  { id: 'humidity', label: 'Rütubət (%)' }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      tab === t.id
                        ? 'bg-[#38bdf8] text-[#030f1a] shadow-md shadow-[#38bdf8]/20'
                        : 'bg-[#0a1628] text-[#94a3b8] hover:bg-[#38bdf8]/10 hover:text-white'
                    }`}>
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Time Range Selector */}
              <div className="flex items-center gap-1 bg-[#0a1628] p-1 rounded-lg border border-white/5 text-xs">
                {['1', '6', '24'].map(h => (
                  <button
                    key={h}
                    onClick={() => setTimeRange(h)}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      timeRange === h ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-bold' : 'text-[#94a3b8] hover:text-white'
                    }`}>
                    {h} saat
                  </button>
                ))}
              </div>
            </div>

            {/* Recharts Area Container */}
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" opacity={0.5} vertical={false} />
                  <XAxis dataKey="time" stroke="#64748b" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} tickLine={false} domain={['auto', 'auto']} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0a1628',
                      borderColor: '#1e3a5f',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                  <Area
                    type="monotone"
                    dataKey={tab}
                    stroke="#38bdf8"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#chartGradient)"
                    animationDuration={600}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ACTIVE ALERTS FEED */}
          <div className="glass p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>🔔</span> Aktiv Xəbərdarlıqlar
                </h3>
                {alerts.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/40">
                    {alerts.length}
                  </span>
                )}
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {alerts.length > 0 ? (
                  alerts.map((a: any) => (
                    <div
                      key={a.id}
                      className={`p-3.5 rounded-xl border text-xs transition ${
                        a.severity === 'critical'
                          ? 'bg-red-500/10 border-red-500/40 text-red-200'
                          : a.severity === 'warning'
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                          : 'bg-sky-500/10 border-sky-500/40 text-sky-200'
                      }`}>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-white">{a.message}</p>
                          <p className="text-[10px] text-[#94a3b8] mt-1">
                            {new Date(a.timestamp).toLocaleTimeString('az-AZ')} | Sensor: {a.sensor}
                          </p>
                        </div>
                        <button
                          onClick={() => handleResolveAlert(a.id)}
                          className="text-[10px] px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded border border-white/10 transition whitespace-nowrap">
                          Bağla
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <span className="text-4xl text-emerald-400 mb-2">✓</span>
                    <p className="text-emerald-400 font-semibold text-sm">Bütün parametrlər normaldır</p>
                    <p className="text-[#94a3b8] text-xs mt-1">Kritik hədd aşımı müşahidə olunmur</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center">
              <span className="text-[11px] text-[#94a3b8]">Avtomatik yoxlama dövrü: hər 8 saniyə</span>
            </div>
          </div>

        </div>

        {/* SYSTEM HEALTH AND HARDWARE STATUS */}
        <div className="glass p-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-6 w-full lg:w-auto">
            <div
              className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0a1628] border-4 shadow-inner"
              style={{
                borderColor:
                  (systemStatus?.score || 100) >= 70
                    ? '#22c55e'
                    : (systemStatus?.score || 100) >= 45
                    ? '#f59e0b'
                    : '#ef4444'
              }}>
              <span className="text-2xl font-black text-white">{systemStatus?.score ?? 98}</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{systemStatus?.summary || 'Sistem tam stabil vəziyyətdədir'}</h4>
              <p className="text-xs text-[#94a3b8] mt-1">Ekosistem Təhlükəsizlik və Sağlamlıq İndeksi (0–100)</p>
              {systemStatus?.issues && systemStatus.issues.length > 0 && (
                <p className="text-xs text-amber-400 mt-1">⚠️ {systemStatus.issues[0]}</p>
              )}
            </div>
          </div>

          {/* Hardware Status Chips */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end w-full lg:w-auto">
            {[
              { label: 'Arduino Uno (MCU)', status: 'online' },
              { label: 'DS18B20 (Su)', status: 'online' },
              { label: 'HC-SR04 (Səviyyə)', status: 'online' },
              { label: 'DHT22 (Hava)', status: 'online' },
              { label: 'Isıdıcı Rele', status: 'standby' },
              { label: 'Aerator Nasosu', status: 'active' }
            ].map(hw => (
              <div key={hw.label} className="flex items-center gap-1.5 bg-[#0a1628] px-3 py-1.5 rounded-lg border border-[#38bdf8]/20">
                <span
                  className={`w-2 h-2 rounded-full ${
                    hw.status === 'online' || hw.status === 'active' ? 'bg-[#22c55e]' : 'bg-[#f59e0b]'
                  }`}></span>
                <span className="text-[11px] text-[#94a3b8]">{hw.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRIVATE DATA & ACCESS REQUEST SECTION */}
        <div className="glass p-6 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-[#0a1628]/90 via-rose-950/20 to-[#0a1628]/90 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="text-xl p-2 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400">🔒</span>
              <h4 className="text-base md:text-lg font-bold text-white">
                Məlumatların Məxfiliyi və Giriş İcazəsi (Private Data &amp; Access Request)
              </h4>
            </div>
            <p className="text-xs md:text-sm text-[#cbd5e1] leading-relaxed">
              Bu platformanın əsas tədqiqat dataları, eksperimental telemetriya bazası, öyrədilmiş AI modelləri, mikrokontroller proqram təminatı və tam mənbə kodu (<code className="text-[#38bdf8] font-mono">AquaMindAI</code> monorepo) əqli mülkiyyət və elmi təhlükəsizlik məqsədilə <strong className="text-rose-400">məxfidir (Private)</strong>. Akademik tədqiqat, elmi rəy, tərəfdaşlıq və ya məxfi datalara <strong className="text-white">giriş icazəsi (access)</strong> əldə etmək üçün rəsmi elektron poçt ünvanına müraciət edə bilərsiniz:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto flex-shrink-0">
            <a
              href="mailto:suleyman.hacizade1@gmail.com?subject=AquaMind%20AI%20-%20Private%20Data%20%26%20Repository%20Access%20Request"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#0284c7] text-[#030f1a] hover:text-white font-bold text-xs transition-all shadow-lg shadow-[#38bdf8]/20">
              <span>✉️</span>
              <span>suleyman.hacizade1@gmail.com</span>
            </a>
            <a
              href="mailto:suleyman.hacizade.232bioing@wcu.edu.az?subject=AquaMind%20AI%20-%20Academic%20Data%20Access%20Request"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#0a1628] hover:bg-[#1e3a5f] border border-[#38bdf8]/30 text-[#38bdf8] font-semibold text-xs transition-all">
              <span>🎓</span>
              <span>suleyman.hacizade.232bioing@wcu.edu.az</span>
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center text-[#94a3b8] text-xs py-6 border-t border-white/5 space-y-1.5">
          <p className="font-medium text-white">AquaMind AI v2.0 — Ağıllı Akvakültür və Akvaponika Sistemi</p>
          <p>Bakı, Azərbaycan Respublikası | GitHub Pages &amp; Cloud Ready · Next.js 14 · FastAPI · Scikit-Learn</p>
          <p className="text-[#cbd5e1]">
            🔒 Əsas datalar və kod bazası <strong>Private</strong>-dir · Giriş (Access) üçün müraciət:{' '}
            <a href="mailto:suleyman.hacizade1@gmail.com" className="text-[#38bdf8] hover:underline font-semibold">
              suleyman.hacizade1@gmail.com
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
}
