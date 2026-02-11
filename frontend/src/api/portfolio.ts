import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Portfolio } from "../types/portfolio";

const usePortfolio = () => {
  return useQuery({
    queryKey: ["portfoliio"],
    queryFn: async () => {
      const { data } = await axios.get<Portfolio>(
        "http://localhost:5000/api/portfolio",
      );
      return data;
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};

export default usePortfolio;
