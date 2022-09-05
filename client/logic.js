const socket = io();
let nickname = "Lisa"

socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})

const sendBtn = document.getElementById("msgBtn")
sendBtn.addEventListener("click", () => {
    const input = document.getElementById("msg").value
    console.log(input)
    socket.emit("msg", {input, nickname})
    
})
socket.on("msg", (msgInput) => {
    console.log(msgInput) 
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += msgInput + "<br>"  
})

/* socket.on("msg", (msg) => {
    console.log(`${msg.input} : ${msg.nickname}`)
})  */



// Tar in nyckeln som ska matcha med nyckeln som kommer från servern? - samma som urlen i fetvh.
/* socket.on("newSocket", (socketId) => { // skickar med det nya socket.Id
    console.log("New socket connecter: " + socketId)
})


socket.on("welcome", (msg) => {
    console.log(msg)
})
 */
