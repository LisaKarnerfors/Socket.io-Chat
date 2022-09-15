import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import { handlerMessage } from "./API.js"

const app = express()
const httpServer = createServer(app);
const port = 3000;
const io = new Server(httpServer)

app.use("/", express.static("./client"))

const users = {}

io.on("connection", (socket) => {
    console.log("Socket user has connected: " + socket.id)
    io.emit("userConnected", socket.id)
    socket.emit("welcome", "Välkommen till chatten")

    socket.on("new-user", (name) => {
        users[socket.id] = name
        io.emit("user-connected", name)
    })
  
    socket.on("msg", async (message) => { 
        message = await handlerMessage(message)
        socket.broadcast.emit("chat-message", message)
        io.emit("msg", { message: message, name: users[socket.id] }) 
})

    /* socket.on('codeboard-message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('message-from-others', msg)
      });  */
})


httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
  })
