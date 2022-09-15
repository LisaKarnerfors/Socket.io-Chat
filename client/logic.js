const socket = io();


const name = prompt('Fyll i användarnamn för att ansluta till chatten!')
renderMessage("Välkommen")
socket.emit("new-user", (name)) 


// Socket on - skapar en lyssnare
socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})

// När en user connectar
socket.on("user-connected", name => {
    renderMessage(`${name} är ansluten!`)
}) 

// Tar in namn och meddelande
socket.on("msg", (message)  => {
    renderMessage(`${message.name}: ${message.message}`)
 }) 


/* socket.on("msgApi", (msgApi) => {
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += msgApi + "<br>"  
 })  */


function renderMessage(message) {
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += message + "<br>"  
}

const sendMsg = document.getElementById("msgBtn")
sendMsg.addEventListener("click", (e) => {
    e.preventDefault()
    
    const input = document.getElementById("message")
        const inputForm = input.value
        socket.emit("msgApi", inputForm)
        socket.emit("msg", inputForm) 
        input.value = "";
}) 


// API relaterat
const msgApi = message.addEventListener('keyup', (e) => { 
    if (e.target.value.startsWith("/")) {
        const input = document.getElementById("message")
        const commando = document.getElementById("commando") 
        commando.innerText = "Hej! Skriv kommando /cocktail för att få upp random cocktail namn."
        
    } else  {
        const commando = document.getElementById("commando") 
        commando.innerText = ""
    }
    
   }, false);


   let sendWithEnterKey = document.getElementById("message");
   sendWithEnterKey.addEventListener("keypress", function(e) {
     if (e.key === "Enter") {
       e.preventDefault();
       document.getElementById("msgBtn").click();
    }

   });



