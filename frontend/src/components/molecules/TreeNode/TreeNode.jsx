import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import "./TreeNode.css";
import FileIcon from "../../atoms/FileIcon";
import useEditorSocketStore from "../../../store/editorSocketStore";

const TreeNode = ({ fileFolderData, visibility, toggleVisibility }) => {
  const { editorSocket } = useEditorSocketStore();
  const computeExtention = (name) => {
    name = name.split(".");
    let extension = name[name.length - 1];
    return extension;
  };

  function handleClick(fileFolderData) {
    editorSocket.emit("readFile", {
      pathToFileOrFolder: fileFolderData.path,
    });
  }

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
            {visibility && visibility[fileFolderData.name] ? (
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
        <button
          className="file-folder"
          onClick={() => handleClick(fileFolderData)}
        >
          <div className="file">
            <FileIcon extension={computeExtention(fileFolderData.name)} />
            <p>{fileFolderData.name}</p>
          </div>
        </button>
      )}
      {visibility &&
        visibility[fileFolderData.name] &&
        fileFolderData.children &&
        fileFolderData.children.map((item) => (
          <div key={item.path} className="sub-folder">
            <TreeNode
              fileFolderData={item}
              visibility={visibility}
              toggleVisibility={toggleVisibility}
            />
          </div>
        ))}
    </div>
  );
};

export default TreeNode;
