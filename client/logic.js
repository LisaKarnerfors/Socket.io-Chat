const socket = io();


// Tar in nyckeln som ska matcha med nyckeln som kommer från servern? - samma som urlen i fetvh.
socket.on("newSocket", (socketId) => { // skickar med det nya socket.Id
    console.log("New socket connecter: " + socketId)
})


socket.on("welcome", (msg) => {
    console.log(msg)
})
