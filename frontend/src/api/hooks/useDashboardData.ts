import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../endpoints/assets";
import { getPortfolio } from "../endpoints/portfolio";
import { getNews } from "../endpoints/news";
import type { Assets } from "../../types/assets";
import type { Portfolio } from "../../types/portfolio";
import type { News } from "../../types/news";
type DashboardData = {
  portfolio: Portfolio;
  assets: Assets;
  news: News;
};

const useDashboardData = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const [portfolio, assets, news] = await Promise.all([
        getPortfolio(),
        getAssets(),
        getNews(),
      ]);
      return { portfolio, assets, news };
    },
  });
};
export default useDashboardData;
