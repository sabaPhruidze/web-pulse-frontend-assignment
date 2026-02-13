import type { Portfolio } from "../../types/portfolio";
import { api } from "../http";

export const getPortfolio = async (): Promise<Portfolio> => {
  const { data } = await api.get<Portfolio>("/api/portfolio");
  return data;
};
