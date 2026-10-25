import { NextResponse } from 'next/server';
import { generateLiveReading, computeActiveAlerts, getExternalBackendUrl } from '../../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function GET() {
  const backendUrl = getExternalBackendUrl();

  if (backendUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${backendUrl}/api/alerts/active`, {
        signal: controller.signal,
        cache: 'no-store'
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return NextResponse.json(data);
        }
      }
    } catch (e) {
      console.warn("External backend failed, falling back to serverless alerts:", e);
    }
  }

  const latest = generateLiveReading();
  const alerts = computeActiveAlerts(latest);
  return NextResponse.json(alerts);
}
