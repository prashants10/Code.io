import TreeNode from "../molecules/TreeNode/TreeNode";

const TreeStructure = ({ fileFolderData }) => {
  return (
    <div>
      <TreeNode fileFolderData={fileFolderData} />
    </div>
  );
};

export default TreeStructure;
