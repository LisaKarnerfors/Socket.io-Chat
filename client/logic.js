const socket = io();

let nickname = "";


const sentMsg = () => {

} 

socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})


// Relaterat till nickname
document.getElementById("saveNameBtn").addEventListener("click", () => {
    const msg = document.getElementById("name").value
    socket.emit("msg", msg, nickname) 
})


const sendBtn = document.getElementById("msgBtn")
sendBtn.addEventListener("click", () => {
    const input = document.getElementById("msg").value 
    socket.emit("msg", input, nickname)
    input.value = "";
}) 

msg.addEventListener('input', (e) => {
    if (e.target.value == "/") {
        const input = document.getElementById("msg")
        input.value = "/cocktail"
    }
   }, false);
  
   let input = document.getElementById("msg");
   input.addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
       event.preventDefault();
       document.getElementById("msgBtn").click();
     }
   });


socket.on("msg", (msgApi) => {
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += msgApi + "<br>"  
})



