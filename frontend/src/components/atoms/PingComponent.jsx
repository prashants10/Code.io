import usePing from "../../hooks/apis/queries/usePing";
// import { useEffect } from "ract";
export const PingComponent = () => {
  const { isLoading, data } = usePing();
  if (isLoading) {
    return <>Loading...</>;
  }
  return <>Hello {data.message}</>;
};
