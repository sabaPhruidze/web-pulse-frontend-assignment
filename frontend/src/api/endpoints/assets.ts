import type { Assets } from "../../types/assets";
import { api } from "../http";

export const getAssets = async (): Promise<Assets> => {
  const { data } = await api.get<Assets>("/api/assets");
  return data;
};
