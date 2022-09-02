import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express()
const httpServer = createServer(app);
const port = 3000;
const io = new Server(httpServer)

app.use("/", express.static("./client"))

// io lyssnare på inkommande anrop, fördefinerad (reserverat ord samt disconation)

io.on("connection", (socket) => {
    console.log("Socket has connected: " + socket.id)
    io.emit("newSocket", socket.id)
    socket.emit("welcome", "Välkommen till chatten!")

    // Här kommer vi lägga till våra egna (join, leave, osv)
})

/* io.on("connection", (socket) => {
    console.log("Socket has connected:" + socket.Id) // grunden för API:t - vi ska arbeta i denna ccallback-funktioner (socket.on socket on message..)
}) */

// On lyssnar

// Emit skickar


httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
  })
