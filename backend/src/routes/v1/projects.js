import express from "express";
import { createProjectController, projectTreeController } from "../../controllers/projectController.js";

const router = express.Router();

router.post("/", createProjectController);
router.get("/:projectId/tree", projectTreeController);

export default router;
