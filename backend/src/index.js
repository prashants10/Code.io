import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import apiRouter from "./routes/index.js";
import { PORT } from "./config/serverConfig.js";
import chokidar from "chokidar";
import { handleEditorEvents } from "./socketHandlers/editorHandler.js";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRouter);

const editorNamespace = io.of("/editor");
editorNamespace.on("connection", (socket) => {
  console.log("editor connected");

  // somehow we will get the projectId from frontend;
  let projectId = socket.handshake.query["projectId"];

  console.log("Project id received after connection", projectId);

  if (projectId) {
    var watcher = chokidar.watch(`./projects/${projectId}`, {
      ignored: (path) => path.includes("node_modules"),
      persistent: true /** keeps the watcher in running state till the time app is running */,
      awaitWriteFinish: {
        stabilityThreshold: 2000 /** Ensures stability of files before triggering event */,
      },
      ignoreInitial: true /** Ignores the initial files in the directory */,
    });

    watcher.on("all", (event, path) => {
      console.log(event, path);
    });
  }

  handleEditorEvents(socket);
  // socket.on("disconnect", async () => {
  //     await watcher.close();
  //     console.log("editor disconnected");

  // });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
