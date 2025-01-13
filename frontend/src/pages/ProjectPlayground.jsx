import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";
import useProjectTree from "../hooks/apis/queries/useProjectTree";
import useTreeStructureStore from "../store/treeStructureStore";
import { useEffect } from "react";
import TreeStructure from "../components/organisms/TreeStructure";
// import EditorComponent from "../components/molecules/EditorComponent";
const ProjectPlayground = () => {
  const { projectId } = useParams();
  const { data } = useProjectTree(projectId);
  const { treeStructure, setTreeStructure } = useTreeStructureStore();

  useEffect(() => {
    setTreeStructure(data?.data);
  }, [data, setTreeStructure]);

  return (
    <div>
      <h1>Project Id : {projectId}</h1>
      <div>
        {treeStructure && (
          <div
            style={{
              background: "#1e1e29",
              minWidth: "250px",
              maxWidth: "25%",
              height: "99.7vh",
              overflow: "auto",
            }}
          >
            <TreeStructure fileFolderData={treeStructure} />
          </div>
        )}
        <EditorComponent />
      </div>
    </div>
  );
};

export default ProjectPlayground;
