import { NextRequest, NextResponse } from 'next/server';
import { generateHistoryReadings, getExternalBackendUrl } from '../../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const hours = parseInt(searchParams.get('hours') || '24', 10);
  const backendUrl = getExternalBackendUrl();

  if (backendUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${backendUrl}/api/sensors/history?hours=${hours}`, {
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
      console.warn("External backend failed, falling back to serverless history:", e);
    }
  }

  // Fallback to serverless historical readings
  const history = generateHistoryReadings(hours, Math.min(48, Math.max(12, hours * 2)));
  return NextResponse.json(history);
}
