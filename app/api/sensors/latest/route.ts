import { NextResponse } from 'next/server';
import { generateLiveReading, getExternalBackendUrl } from '../../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function GET() {
  const backendUrl = getExternalBackendUrl();

  if (backendUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${backendUrl}/api/sensors/latest`, {
        signal: controller.signal,
        cache: 'no-store'
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch (e) {
      console.warn("External backend failed, falling back to serverless telemetry:", e);
    }
  }

  // Fallback to serverless live telemetry
  const reading = generateLiveReading();
  return NextResponse.json(reading);
}
