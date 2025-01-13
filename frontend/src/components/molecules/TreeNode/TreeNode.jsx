import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import "./TreeNode.css";
import FileIcon from "../../atoms/FileIcon";

const TreeNode = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});
  const toggleVisibility = (name) => {
    setVisibility({
      ...visibility,
      [name]: !visibility[name],
    });
  };
  console.log(visibility);
  const computeExtention = (name) => {
    name = name.split(".");
    let extension = name[name.length - 1];
    return extension;
  };

  return (
    <div>
      {fileFolderData.children ? (
        <button
          className="file-folder"
          onClick={() => {
            toggleVisibility(fileFolderData.name);
          }}
        >
          <div className="folder">
            {visibility[fileFolderData.name] ? (
              <>
                <IoIosArrowDown />
                <FaFolderOpen />
              </>
            ) : (
              <>
                <IoIosArrowForward />
                <FaFolder />
              </>
            )}
            {fileFolderData.name}
          </div>
        </button>
      ) : (
        <button className="file-folder">
          <div className="file">
            <FileIcon extension={computeExtention(fileFolderData.name)} />
            <p>{fileFolderData.name}</p>
          </div>
        </button>
      )}
      {visibility[fileFolderData.name] &&
        fileFolderData.children &&
        fileFolderData.children.map((item) => (
          <div key={item.path} className="sub-folder">
            <TreeNode fileFolderData={item} />
          </div>
        ))}
    </div>
  );
};

export default TreeNode;
