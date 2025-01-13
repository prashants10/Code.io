import { useQuery } from "@tanstack/react-query";
import { projectTreeApi } from "../../../apis/projects";

const useProjectTree = (projectId) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["projectTree"],
    queryFn: () => {
      return projectTreeApi(projectId);
    },
  });

  return { isLoading, isError, data, error };
};

export default useProjectTree;
