import { useState } from "react";
import TreeNode from "../molecules/TreeNode/TreeNode";

const TreeStructure = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});
  console.log(visibility)
  const toggleVisibility = (name) => {
    setVisibility({
      ...visibility,
      [name]: !visibility[name],
    });
  };
  return (
    <div>
      <TreeNode
        fileFolderData={fileFolderData}
        visibility={visibility}
        toggleVisibility={toggleVisibility}
      />
    </div>
  );
};

export default TreeStructure;
