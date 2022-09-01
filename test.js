// Lektion 1 - grunder hur vi sätter upp projektet samt hur vi skapar rum


import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express()
const httpServer = createServer();
const port = 3000;
const io = new Server(httpServer, {
  cors: {
    orgin: "*",
  }
})

app.use("/", express.static("./client")) // 


// Skapar en lyssnare som lyssnar på inkommande anrop ifrån alla clienter
io.on("connection", (socket) => { // Blir inte en socket utan flera socket...
  console.log("Socket has connected: " + socket.id) // Tänk detta som en map, find eller foreach.. 

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
    socket.nickname = nickname // Sparar nickename i en socket
    io.in(socketRoomData.roomToJoin.emit("welcome", `Välkommen ${socket.nickname}`)) // Skickar ut meddelande..
  })


  socket.on("getRooms", () => {
    console.log(io.socket.adapter.rooms) // här kan vi se alla rum - vilket vi gör om i lektion två
    const filteredRoomsArray = convertRoomMap()  

    io.emit("rooms", filteredRoomsArray)
  })

  socket.emit("welcome")

  socket.on("room", (rooms) => {
    console.log(rooms)

  })


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


// Repition samt hur man sätter upp två separata projekt och kopplar dem samman (server samt client)
/* 
1. Olika portar 
2. cors - vilka adresser ska vi ge servern rättigheter till.. orgin:"*" = alla adresser. 
3. Ändra const sockekr = io("adressen") - url till backendserver på clienten
*/

// Lektion 2 - fortsättning 

// Gör om adapter till array
const convertRoomMap = () => {
  // Gör om map till listor 
  const convertedArray = Array.from(io.socket.adapter.rooms)

  //Kollar om det är en socket?? // Filter = om det blir true behåller det den om det blir false tar det bort den..

  const filteredRooms = convertedArray.filter(room => !room[1].has(room[0])) 

  // Mapar över det och behöller samma längd
  const roomsWithSocketId = filteredRooms.map((roomArray) => {
    return {room: roomArray[0], sockets: Array.from(roomArray[1])} // Skapar objekt och gör om det mer hanterbart 
  })

  console.log(roomsWithSocketId)
// Få med nickenams i vår array med map -  
  const roomsWithIdAndNickname = roomsWithSocketId.map((roomObj) => {
    // Hämtar ut alla nicknames
    const nicknames = roomObj.sockets.map((socketId) => {
      return { id: socketId, nickname: io.socket.sockets.get(socketId).nickname} // get = find som hittar ett id mot id.. och plockar ut nicknames. Resulterar i ett varje socket i arrayen sparas som objekt som matchar med ID
    })
    return {room: roomObj.room, sockets: nicknames}

  })

  return(roomsWithIdAndNickname)

}
  console.log(filteredRooms)
  console.log(io.socket.adapter.rooms)
  console.log(convertedArray)
  



/*  
socket.emit('message', "this is a test"); //sending to sender-client only
socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender
socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender
socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)
socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid
io.emit('message', "this is a test"); //sending to all clients, include sender
io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender
io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender
socket.emit(); //send to all connected clients
socket.broadcast.emit(); //send to all connected clients except the one that sent the message
socket.on(); //event listener, can be called on client to execute on server
io.sockets.socket(); //for emiting to specific clients
io.sockets.emit(); //send to all connected clients (same as socket.emit)
io.sockets.on() ; //initial connection from a client.
*/