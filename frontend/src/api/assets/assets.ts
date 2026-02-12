import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Assets } from "../../types/Assets";

const useAssets = () => {
  return useQuery({
    queryKey: ["Assets"],
    queryFn: async () => {
      const { data } = await axios.get<Assets>(
        "http://localhost:5000/api/assets",
      );
      return data;
    },
  });
};
export default useAssets;
