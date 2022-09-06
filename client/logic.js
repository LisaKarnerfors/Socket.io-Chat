const socket = io();

let nickname = "" 

socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})


const sendBtn = document.getElementById("msgBtn")
sendBtn.addEventListener("click", () => {
    const input = document.getElementById("msg")/* .value */
  /*   console.log(input.value) */
    socket.emit("msg", input.value)
  /*  socket.emit("msg", { input, nickname }) */ // Det här gör att det crashar....
    input.value = ""
}) 

msg.addEventListener('input', (e) => {
    if (e.target.value == "/") {
        const input = document.getElementById("msg")
        input.value = "/cocktail"
    }
   }, false);
  
   //msgBtn posted on enter click
   let input = document.getElementById("msg");
   input.addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
       event.preventDefault();
       document.getElementById("msgBtn").click();
     }
   });

socket.on("msg", (msgApi) => {
    console.log(msgApi)
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += msgApi + "<br>"  
})



/* socket.on("msg", (msg) => {
    console.log(`${msg.input} : ${msg.nickname}`)
})  */




// Tar in nyckeln som ska matcha med nyckeln som kommer från servern? - samma som urlen i fetvh.
/* socket.on("newSocket", (socketId) => { // skickar med det nya socket.Id
    console.log("New socket connecter: " + socketId)
})
*/