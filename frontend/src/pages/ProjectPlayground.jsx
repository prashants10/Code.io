import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";
// import EditorComponent from "../components/molecules/EditorComponent";
const ProjectPlayground = () => {
  const { projectId } = useParams();
  return (
    <div>
      <h1>Project Id : {projectId}</h1>
      <EditorComponent />
    </div>
  );
};

export default ProjectPlayground;
