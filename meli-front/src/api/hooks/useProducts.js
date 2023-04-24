import { useQuery } from "react-query";
import { ListService } from "../services/list";

export const useProducts = (params) => {
  return useQuery(["products-list", params], () => ListService.getAll(params), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
