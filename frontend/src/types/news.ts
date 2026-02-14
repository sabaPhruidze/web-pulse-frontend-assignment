interface ReceiveNews {
  id: string;
  title: string;
  source: string;
  category: string;
  timestamp: string;
  impact: string;
  summary: string;
  tags: string[];
}

export interface News {
  success: boolean;
  count: number;
  data: ReceiveNews[];
}
