import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import useProjectTree from "../hooks/apis/queries/useProjectTree";
import useTreeStructureStore from "../store/treeStructureStore";
import { useEffect } from "react";
import TreeStructure from "../components/organisms/TreeStructure";
import useEditorSocketStore from "../store/editorSocketStore";
import { io } from "socket.io-client";

const ProjectPlayground = () => {
  const { projectId } = useParams();
  const { data } = useProjectTree(projectId);
  const { treeStructure, setTreeStructure } = useTreeStructureStore();
  const { setEditorSocket } = useEditorSocketStore();

  useEffect(() => {
    setTreeStructure(data?.data);
    const editorSocketConn = io(`${import.meta.env.VITE_BACKEND_URL}/editor`, {
      query: {
        projectId: projectId,
      },
    });
    setEditorSocket(editorSocketConn);
  }, [projectId, data, setTreeStructure,setEditorSocket]);

  return (
    <div>
      <h1>Project Id : {projectId}</h1>
      <div style={{ display: "flex" }}>
        {treeStructure && (
          <div
            style={{
              background: "#1e1e29",
              width: "25%",
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
