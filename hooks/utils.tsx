import { useQuery } from "@tanstack/react-query";
import { getList } from "@/controllers/controller";

export const useFetch = (
  queryParam?: string,
  isShuffledEnabled?: boolean,
  searchParam?: string,
) => {
  return useQuery({
    queryKey: ["words", queryParam, isShuffledEnabled, searchParam],
    queryFn: () => getList(queryParam, isShuffledEnabled, searchParam),
  });
};
