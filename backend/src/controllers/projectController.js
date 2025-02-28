import {
  createProjectService,
  projectTreeService,
} from "../services/projectService.js";

export async function createProjectController(req, res) {
  try {
    const data = await createProjectService();
    return res.status(201).json({
      message: "Project created successfully",
      data: data,
    });
  } catch (err) {
    return res.status(502).json({
      message: "Something went wrong",
    });
  }
}

export async function projectTreeController(req, res) {
  try {
    const tree = await projectTreeService(req.params.projectId);
    return res.status(200).json({
      data: tree,
      message: "Successfully fetched the tree",
    });
  } catch (err) {
    return res.status(502).json({
      message: "Something went wrong",
    });
  }
}
