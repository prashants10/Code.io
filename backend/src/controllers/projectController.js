import util from "util";
import child_process from "child_process";
import fs from "fs/promises";
import uuid4 from "uuid4";

const execPromisified = util.promisify(child_process.exec);

export async function createProjectController(req, res) {
  try {
    // Create a unique id and inside the projects folder create a folder with that id
    const projectId = uuid4();

    await fs.mkdir(`./projects/${projectId}`);

    const response = await execPromisified(
      "npm create vite@latest sandbox -- --template react",
      {
        cwd: `./projects/${projectId}`,
      }
    );
    return res.status(201).json({
      message: "Project created successfully",
      data: projectId,
    });
  } catch (err) {}
}
