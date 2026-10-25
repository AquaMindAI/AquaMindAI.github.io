import { NextResponse } from 'next/server';
import { generateLiveReading, computeWaterForecast, getExternalBackendUrl } from '../../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function GET() {
  const backendUrl = getExternalBackendUrl();

  if (backendUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${backendUrl}/api/predictions/water-temp`, {
        signal: controller.signal,
        cache: 'no-store'
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch (e) {
      console.warn("External backend failed, falling back to serverless predictions:", e);
    }
  }

  const latest = generateLiveReading();
  const forecast = computeWaterForecast(latest);
  return NextResponse.json(forecast);
}
