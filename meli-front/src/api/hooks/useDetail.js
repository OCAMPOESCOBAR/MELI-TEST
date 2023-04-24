import { useQuery } from "react-query";
import { DetailService } from "../services/detail";

export const useDetails = (itmId) => {
  return useQuery(
    ["product-detail", itmId],
    () => DetailService.getDetail(itmId),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
};
