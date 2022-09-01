import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

/* Huvudsidan att arbeta med i socket.io */
import { router as APIRouter } from "./routers/API.js"

const app = express()
const httpServer = createServer();
const port = 3000;
const io = new Server(httpServer)

app.use(express.json())
app.use("/", express.static("./client")) 
app.use("/API.js", APIRouter)



httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
})
   

