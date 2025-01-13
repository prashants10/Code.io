import fs from "fs/promises";
import uuid4 from "uuid4";
import execPromisified from "../utils/execUtility.js";
import directoryTree from "directory-tree";
import path from "path";

export async function createProjectService() {
  const projectId = uuid4();

  await fs.mkdir(`./projects/${projectId}`);

  const response = await execPromisified(
    "npm create vite@latest sandbox -- --template react",
    {
      cwd: `./projects/${projectId}`,
    }
  );
  return projectId;
}

export async function projectTreeService(projectId) {
  const projectPath = path.resolve(`./projects/${projectId}`);
  const tree = directoryTree(projectPath);
  return tree;
}
