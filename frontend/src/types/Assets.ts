export interface TopMover {
  id: string;
  symbol: string;
  name: string;
  sector?: string;
  currentPrice: number;
  changePercent: number;
}

export interface Assets {
  success: boolean;
  count: number;
  data: TopMover[];
}
