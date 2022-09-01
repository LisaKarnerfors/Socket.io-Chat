import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express()
const httpServer = createServer();
const port = 3000;
const io = new Server(httpServer)

app.use("/", express.static("./client"))






httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
  })
