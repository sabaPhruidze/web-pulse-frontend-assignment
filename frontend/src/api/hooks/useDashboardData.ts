import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../endpoints/assets";
import { getPortfolio } from "../endpoints/portfolio";
import { getNews } from "../endpoints/news";
import { getAlerts } from "../endpoints/alerts";
import type { Assets } from "../../types/assets";
import type { Portfolio } from "../../types/portfolio";
import type { News } from "../../types/news";
import type { Alerts } from "../../types/alerts";
type DashboardData = {
  portfolio: Portfolio;
  assets: Assets;
  news: News;
  alerts: Alerts;
};

const useDashboardData = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const [portfolio, assets, news, alerts] = await Promise.all([
        getPortfolio(),
        getAssets(),
        getNews(),
        getAlerts(),
      ]);
      return { portfolio, assets, news, alerts };
    },
  });
};
export default useDashboardData;
