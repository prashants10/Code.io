import { FaGitAlt, FaJs, FaReact, FaHtml5, FaMarkdown } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { FaCss3 } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";

const FileIcon = ({ extension }) => {
  const iconStyle = {
    height: "18px",
    width: "18px",
  };
  const IconMapper = {
    js: <FaJs color="yellow" style={iconStyle} />,
    jsx: <FaReact color="#61dbfa" style={iconStyle} />,
    css: <FaCss3 color="#3c99dc" style={iconStyle} />,
    html: <FaHtml5 color="#e34c26" style={iconStyle} />,
    gitignore: <FaGitAlt color="red" style={iconStyle} />,
    json: <VscJson color="yellow" style={iconStyle} />,
    md: <FaMarkdown color="#a8a08d" style={iconStyle} />,
    svg : <FaImage color="white" style={iconStyle}/>,
    jpg : <FaImage color="white" style={iconStyle}/>,
    jpeg : <FaImage color="white" style={iconStyle}/>,
  };
  return <>{IconMapper[extension]}</>;
};

export default FileIcon;
