import type { NewsImpact } from "./news";

export type AlertImpact = "positive" | "neutral" | "negative";
export type AlerAssetType = "stock" | "crypto" | "global";

export interface AlertsData {
  id: string;
  severity: NewsImpact;
  message: string;
  timestamp: string;
  type?: string;
  title: string;
  impact?: AlertImpact;
  assetId?: string;
  assetType?: AlerAssetType;
  affectedAssets?: string[];
  actionRequired?: boolean;
  aiCoreAccuracy?: number;
}

export interface Alerts {
  success: boolean;
  count: number;
  data: AlertsData[];
}
