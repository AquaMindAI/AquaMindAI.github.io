import { NextResponse } from 'next/server';
import { generateLiveReading, computeSystemStatus, getExternalBackendUrl } from '../../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function GET() {
  const backendUrl = getExternalBackendUrl();

  if (backendUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${backendUrl}/api/predictions/system-status`, {
        signal: controller.signal,
        cache: 'no-store'
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({
          ...data,
          mode: 'live_backend',
          backend_url: backendUrl
        });
      }
    } catch (e) {
      console.warn("External backend failed, falling back to serverless status:", e);
    }
  }

  const latest = generateLiveReading();
  const status = computeSystemStatus(latest);
  return NextResponse.json(status);
}
