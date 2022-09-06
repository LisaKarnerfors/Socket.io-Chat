import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import { handlerMessage } from "./API.js"

const app = express()
const httpServer = createServer(app);
const port = 3000;
const io = new Server(httpServer)

app.use("/", express.static("./client"))


io.on("connection", (socket) => {
    console.log("Socket user has connected: " + socket.id)
    io.emit("userConnected", socket.id)
    socket.emit("welcome", "Välkommen till chatten..")
    
    socket.on("msg", (msgApi) => {
        handlerMessage(io, socket, msgApi)
        socket.nickname = msgApi.nickname
        
        // i denna filen är det dessa 3 som är viktiga för att bygga ett API
        // io, till för att skicka meddelanden till andra
        // socket, till för att prata med nuvarande, current, användare
        // msgApi, innehåller användarens kommando

        // Här kommer vi lägga till våra egna (join, leave, osv) - I samma???
        })

})


httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
  })
