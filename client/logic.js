const socket = io();

socket.on("userConnected", (socketId) => {
    console.log("New socket connected" + " " + socketId);
})

const sendBtn = document.getElementById("msgBtn")
sendBtn.addEventListener("click", () => {
    const input = document.getElementById("msg")
    console.log(input.value)
    socket.emit("msg", input.value)
    
})
socket.on("msg", (msg) => {
    console.log(msg)
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += msg + "<br>"  
})
/* const nickname = getElementByID(saveNickname) */