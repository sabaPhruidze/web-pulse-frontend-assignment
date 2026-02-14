export interface AlertsData {
  id: string;
  severity: string;
  message: string;
  timestamp: string;
  affectedAssets: string[];
}

export interface Alerts {
  success: boolean;
  count: number;
  data: AlertsData[];
}
