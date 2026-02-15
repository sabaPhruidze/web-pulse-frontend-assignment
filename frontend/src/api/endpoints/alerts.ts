import type { Alerts } from "../../types/alerts";
import { api } from "../http";

export const getAlerts = async (): Promise<Alerts> => {
  const { data } = await api.get<Alerts>("/api/alerts");
  return data;
};
