import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping";

const usePing = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["ping"],
    queryFn: pingApi,
    staleTime: 10000
  });

  return { isLoading, isError, data, error };
};

export default usePing;