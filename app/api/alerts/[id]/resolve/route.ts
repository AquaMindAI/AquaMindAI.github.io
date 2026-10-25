import { NextRequest, NextResponse } from 'next/server';
import { resolveSimulatedAlert, getExternalBackendUrl } from '../../../_lib/telemetry';

export const dynamic = 'force-dynamic';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const alertId = parseInt(params.id, 10);
  const backendUrl = getExternalBackendUrl();

  if (backendUrl) {
    try {
      const res = await fetch(`${backendUrl}/api/alerts/${alertId}/resolve`, {
        method: 'POST'
      });
      if (res.ok) {
        return NextResponse.json({ success: true, backend: true });
      }
    } catch (e) {
      console.warn("External backend resolve failed, fallback to local:", e);
    }
  }

  resolveSimulatedAlert(alertId);
  return NextResponse.json({ success: true, resolvedId: alertId });
}
