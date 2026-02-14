export type NewsCategory =
  | "market"
  | "crypto"
  | "technology"
  | "macro"
  | "earnings"
  | "regulatory";
type NewsImpact = "low" | "medium" | "high" | "critical";

interface ReceiveNews {
  id: string;
  title: string;
  source: string;
  category: NewsCategory;
  timestamp: string;
  impact: NewsImpact;
  summary: string;
  tags: string[];
}

export interface News {
  success: boolean;
  count: number;
  data: ReceiveNews[];
}
