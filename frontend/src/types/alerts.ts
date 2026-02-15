import type { NewsImpact } from "./news";
export interface AlertsData {
  id: string;
  severity: NewsImpact;
  message: string;
  timestamp: string;
  affectedAssets?: string[];
}

export interface Alerts {
  success: boolean;
  count: number;
  data: AlertsData[];
}
