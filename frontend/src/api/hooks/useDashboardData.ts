import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../endpoints/assets";
import { getPortfolio } from "../endpoints/portfolio";
import type { Assets } from "../../types/assets";
import type { Portfolio } from "../../types/portfolio";

type DashboardData = {
  portfolio: Portfolio;
  assets: Assets;
};

const useDashboardData = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const [portfolio, assets] = await Promise.all([
        getPortfolio(),
        getAssets(),
      ]);
      return { portfolio, assets };
    },
  });
};
export default useDashboardData;
