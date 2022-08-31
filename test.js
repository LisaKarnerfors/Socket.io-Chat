import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express()
const httpServer = createServer();
const port = 3000;
const io = new Server(httpServer)

app.use("/", express.static("./client"))


// Skapar en lyssnare som lyssnar på inkommande anrop ifrån alla clienter
io.on("connection", (socket) => { 
  console.log("Socket has connected: " + socket.id)

  // Skickar ut till alla anslutna socket? 
  // io.emit("newSocketConnected", socket.id)

  
  // Rum = gruppera sockers..
  socket.join("") // namnet på rummet
  socket.leave("") // lämna rummet

  // lyssnare på join
  socket.on("join", (socketRoomData) => {
    let example= {roomToJoin: "Crib", roomToLeave: "Prat", nickname: "Kalle"}

    // Måste lämna ett rum innan man går med i ett nytt annars är man med i fler rum..
    socket.leave(roomToLeave)
    socket.join(roomToJoin)
    socket.nickname = nickname
  })


  socket.on("getRooms", () => {
    console.log(io.socket.adapter.rooms) // här kan vi se alla rum 
  })

  socket.emit("welcome")

  socket.on("msg", (msgObj) => {
    io.emit("msg", msgObj)

  })
})

// Vi ska jobba med io.on & io.emit...

// io.in = rum

// Socket. = Specifik till den clienten


/* httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) */

httpServer.listen(port, () => {
  console.log("Server is running on port " + port);
})