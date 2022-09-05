const socket = io();

//let nickname = "Kalle"


socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})


const sendBtn = document.getElementById("msgBtn")
sendBtn.addEventListener("click", () => {
    const input = document.getElementById("msg")
    console.log(input.value)
    socket.emit("msg", input.value)
   /*  socket.emit("msg", { input, nickname }) */
    
}) 


socket.on("msg", (msg) => {
    console.log(msg)
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += msg + "<br>"  
    
})


/* socket.on("msg", (msg) => {
    console.log(`${msg.input} : ${msg.nickname}`)
}) */


/* const nickname = getElementByID(saveNickname) */



// Tar in nyckeln som ska matcha med nyckeln som kommer från servern? - samma som urlen i fetvh.
/* socket.on("newSocket", (socketId) => { // skickar med det nya socket.Id
    console.log("New socket connecter: " + socketId)
})
*/