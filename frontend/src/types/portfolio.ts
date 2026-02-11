interface Assets {
  assetId: string;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  value: number;
  change: number;
  changePercent: number;
}
interface Data {
  userId: string;
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
  assets: Assets[];
  watchlist: string[];
}
export interface Portfolio {
  success: boolean;
  data: Data;
}
