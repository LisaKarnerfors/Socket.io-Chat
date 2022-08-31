const socket = io();

socket.on("newSocketConnected", (socketId) => {
    console.log("New socket connecter:" + socketId)
})


socket.on("'msg'", (msgObj) => {
    console.log()
})


document.getElementsById("msgBtn")[0].addEventListener("click", () => {
    const msg = document.getElementsById("msg")[0].value
    socket.emit("msg", {msg, joinedRoom}) // skickar ut meddelande till alla i rummet, kopplat till io.in
})

document.getElementsById("roomBtn")[0].addEventListener("click", () => {
    const msg = document.getElementsById("room")[0].value
    socket.emit("join", {roomToLeave: joinedRoom, roomToJoin: room})
    joinedRoom = room // sparar rummet
}) 

let nickname = "Kalle" // Ändra så alla inte heter Kalle..