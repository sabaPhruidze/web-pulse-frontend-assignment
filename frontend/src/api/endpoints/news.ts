import type { News } from "../../types/news";
import { api } from "../http";

export const getNews = async (): Promise<News> => {
  const { data } = await api.get<News>("/api/news");
  return data;
};
