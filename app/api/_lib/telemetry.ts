// AquaMind AI — Serverless Telemetry & Simulation Engine
// Used for Vercel deployment when running in Cloud Demo mode or proxying to physical FastAPI backend.

export interface SensorReading {
  id: number;
  pool_id: number;
  water_temp_c: number;
  water_level_cm: number;
  air_temp_c: number;
  air_humidity_pct: number;
  dissolved_oxygen_mg_l?: number;
  ph_level?: number;
  timestamp: string;
}

export interface SystemStatus {
  status: 'excellent' | 'good' | 'warning' | 'critical';
  score: number;
  summary: string;
  issues: string[];
  mode: 'cloud_demo' | 'live_backend';
  backend_url?: string;
}

export interface WaterTempForecast {
  metric: string;
  label: string;
  current: number;
  predicted_1h: number;
  predicted_3h: number;
  predicted_6h: number;
  confidence: number;
  trend: 'rising' | 'falling' | 'stable';
  unit: string;
}

export interface AlertItem {
  id: number;
  pool_id: number;
  timestamp: string;
  severity: 'info' | 'warning' | 'critical';
  sensor: string;
  message: string;
  value: number;
  threshold_min: number;
  threshold_max: number;
  resolved: boolean;
}

// Global simulation state for the serverless instance
let simulationState = {
  tempOffset: 0,
  levelOffset: 0,
  customAlerts: [] as AlertItem[],
  resolvedAlertIds: new Set<number>()
};

export function getSimulationState() {
  return simulationState;
}

export function setSimulationOffset(tempOffset: number, levelOffset: number) {
  simulationState.tempOffset = tempOffset;
  simulationState.levelOffset = levelOffset;
}

export function triggerSimulatedAlert(alert: AlertItem) {
  simulationState.customAlerts.unshift(alert);
}

export function resolveSimulatedAlert(id: number) {
  simulationState.resolvedAlertIds.add(id);
  simulationState.customAlerts = simulationState.customAlerts.filter(a => a.id !== id);
}

export function resetSimulation() {
  simulationState = {
    tempOffset: 0,
    levelOffset: 0,
    customAlerts: [],
    resolvedAlertIds: new Set<number>()
  };
}

// Check if external FastAPI backend is configured
export function getExternalBackendUrl(): string | null {
  const url = process.env.BACKEND_API_URL || process.env.NEXT_PUBLIC_API_URL;
  if (!url || url.includes('localhost') || url.includes('127.0.0.1')) {
    return null;
  }
  return url.replace(/\/$/, '');
}

// Generate realistic live sensor reading based on current time
export function generateLiveReading(date: Date = new Date()): SensorReading {
  const time = date.getTime();
  // Diurnal sinusoidal oscillation (period ~ 24h = 86400000ms)
  const diurnalCycle = Math.sin((time / (1000 * 60 * 60 * 24)) * 2 * Math.PI - (Math.PI / 2));
  // Minute micro-variation
  const noise = Math.sin(time / 15000) * 0.15 + Math.cos(time / 43000) * 0.1;

  const baseWaterTemp = 24.5 + (diurnalCycle * 1.2) + noise + simulationState.tempOffset;
  const baseWaterLevel = 84.0 + Math.sin(time / 30000) * 1.5 + simulationState.levelOffset;
  const baseAirTemp = 23.0 + (diurnalCycle * 3.5) + noise * 1.5;
  const baseHumidity = 65.0 - (diurnalCycle * 8.0) + Math.sin(time / 25000) * 2;
  const dissolvedOxygen = 7.4 - (baseWaterTemp - 24) * 0.15;
  const ph = 7.35 + Math.sin(time / 60000) * 0.08;

  return {
    id: Math.floor(time / 1000),
    pool_id: 1,
    water_temp_c: Number(baseWaterTemp.toFixed(1)),
    water_level_cm: Number(baseWaterLevel.toFixed(1)),
    air_temp_c: Number(baseAirTemp.toFixed(1)),
    air_humidity_pct: Number(baseHumidity.toFixed(1)),
    dissolved_oxygen_mg_l: Number(dissolvedOxygen.toFixed(2)),
    ph_level: Number(ph.toFixed(2)),
    timestamp: date.toISOString()
  };
}

// Generate historical readings for charts
export function generateHistoryReadings(hours: number = 24, count: number = 36): SensorReading[] {
  const readings: SensorReading[] = [];
  const now = Date.now();
  const stepMs = (hours * 3600 * 1000) / count;

  for (let i = count; i >= 0; i--) {
    const timestamp = new Date(now - i * stepMs);
    readings.push(generateLiveReading(timestamp));
  }
  return readings;
}

// Compute water temperature AI prediction
export function computeWaterForecast(latest: SensorReading): WaterTempForecast {
  const current = latest.water_temp_c;
  // Trend estimation: simulated Random Forest / AR(1) projection
  const hour = new Date(latest.timestamp).getHours();
  // Diurnal warming in afternoon (12-16), cooling at night (22-06)
  let hourlyDrift = 0;
  if (hour >= 9 && hour <= 15) {
    hourlyDrift = 0.25;
  } else if (hour >= 20 || hour <= 5) {
    hourlyDrift = -0.2;
  } else {
    hourlyDrift = 0.05;
  }

  const predicted1h = Number((current + hourlyDrift + (simulationState.tempOffset * 0.2)).toFixed(1));
  const predicted3h = Number((current + hourlyDrift * 2.4 + (simulationState.tempOffset * 0.5)).toFixed(1));
  const predicted6h = Number((current + hourlyDrift * 3.8 + (simulationState.tempOffset * 0.8)).toFixed(1));

  let trend: 'rising' | 'falling' | 'stable' = 'stable';
  if (predicted6h > current + 0.5) trend = 'rising';
  else if (predicted6h < current - 0.5) trend = 'falling';

  return {
    metric: "water_temp_c",
    label: "Su Temperaturu",
    current,
    predicted_1h: predicted1h,
    predicted_3h: predicted3h,
    predicted_6h: predicted6h,
    confidence: 0.88,
    trend,
    unit: "°C"
  };
}

// Compute overall system health status & score (0-100)
export function computeSystemStatus(latest: SensorReading): SystemStatus {
  let score = 100;
  const issues: string[] = [];

  // Water temp checks (Normal: 22 - 30°C)
  if (latest.water_temp_c < 18.0 || latest.water_temp_c > 35.0) {
    score -= 35;
    issues.push(`Kritik Su Temperaturu: ${latest.water_temp_c}°C (Hədd: 18-35°C)`);
  } else if (latest.water_temp_c < 22.0 || latest.water_temp_c > 30.0) {
    score -= 20;
    issues.push(`Su temperaturu optimal deyil: ${latest.water_temp_c}°C (Optimal: 22-30°C)`);
  }

  // Water level checks (Normal: 40 - 120 cm)
  if (latest.water_level_cm < 30.0 || latest.water_level_cm > 130.0) {
    score -= 30;
    issues.push(`Kritik Su Səviyyəsi: ${latest.water_level_cm} cm (Hədd: 40-120 cm)`);
  } else if (latest.water_level_cm < 50.0 || latest.water_level_cm > 110.0) {
    score -= 15;
    issues.push(`Su səviyyəsi nəzarət tələb edir: ${latest.water_level_cm} cm`);
  }

  // Air humidity checks (Normal: 40 - 85%)
  if (latest.air_humidity_pct < 30 || latest.air_humidity_pct > 92) {
    score -= 10;
    issues.push(`Hava rütubəti normadan kənardır: ${latest.air_humidity_pct}%`);
  }

  score = Math.max(0, Math.min(100, score));

  let status: 'excellent' | 'good' | 'warning' | 'critical' = 'excellent';
  let summary = 'Bütün ekosistem parametrləri idealdır';

  if (score >= 90) {
    status = 'excellent';
    summary = 'Sistem əla vəziyyətdə işləyir';
  } else if (score >= 70) {
    status = 'good';
    summary = 'Sistem stabil və təhlükəsizdir';
  } else if (score >= 45) {
    status = 'warning';
    summary = 'Diqqət: Bəzi sensorlar xəbərdarlıq həddindədir';
  } else {
    status = 'critical';
    summary = 'Kritik Vəziyyət: Dərhal müdaxilə tələb olunur';
  }

  const backendUrl = getExternalBackendUrl();

  return {
    status,
    score,
    summary,
    issues,
    mode: backendUrl ? 'live_backend' : 'cloud_demo',
    backend_url: backendUrl || undefined
  };
}

// Generate active alerts
export function computeActiveAlerts(latest: SensorReading): AlertItem[] {
  const alerts: AlertItem[] = [...simulationState.customAlerts];

  if (latest.water_temp_c > 30.0 && !simulationState.resolvedAlertIds.has(101)) {
    alerts.push({
      id: 101,
      pool_id: 1,
      timestamp: new Date().toISOString(),
      severity: latest.water_temp_c > 35 ? 'critical' : 'warning',
      sensor: 'DS18B20 (Su Temp)',
      message: `Su temperaturu yüksəkdir: ${latest.water_temp_c}°C (Optimal: 22-30°C)`,
      value: latest.water_temp_c,
      threshold_min: 22,
      threshold_max: 30,
      resolved: false
    });
  }

  if (latest.water_level_cm < 50.0 && !simulationState.resolvedAlertIds.has(102)) {
    alerts.push({
      id: 102,
      pool_id: 1,
      timestamp: new Date().toISOString(),
      severity: latest.water_level_cm < 35 ? 'critical' : 'warning',
      sensor: 'HC-SR04 (Su Səviyyəsi)',
      message: `Hovuzda su səviyyəsi azalıb: ${latest.water_level_cm} cm (Normal: 60-100 cm)`,
      value: latest.water_level_cm,
      threshold_min: 50,
      threshold_max: 120,
      resolved: false
    });
  }

  return alerts.filter(a => !simulationState.resolvedAlertIds.has(a.id));
}
