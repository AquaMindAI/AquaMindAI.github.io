import { NextRequest, NextResponse } from 'next/server';
import { setSimulationOffset, triggerSimulatedAlert, resetSimulation } from '../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action } = body;

    if (action === 'temp_spike') {
      setSimulationOffset(7.5, 0); // Spikes water temp to ~32°C
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
      return NextResponse.json({ success: true, message: 'Temperatur artımı simulyasiyası aktiv edildi' });
    }

    if (action === 'level_drop') {
      setSimulationOffset(0, -45); // Drops water level to ~39 cm
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
      return NextResponse.json({ success: true, message: 'Su səviyyəsi azalması simulyasiyası aktiv edildi' });
    }

    if (action === 'reset') {
      resetSimulation();
      return NextResponse.json({ success: true, message: 'Bütün parametrlər normal rejimə qaytarıldı' });
    }

    return NextResponse.json({ success: false, error: 'Bilinməyən əmr' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
