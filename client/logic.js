const socket = io();

const messageForm = document.getElementById("chat")
const messageInput = document.getElementById("message")

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


function renderMessage(message) {
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += message + "<br>"  
}


const sendMsg = document.getElementById("msgBtn")
sendMsg.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.getElementById("message")
        const inputForm = input.value
        socket.emit("msg", inputForm) 
        input.value = "";
}) 


// API
const msgApi = message.addEventListener('input', (e) => { 
    if (e.target.value == "/") {
        const input = document.getElementById("message")
        
        if (input.value == "/") { 
        const commando = document.getElementById("commando") 
        commando.innerText = "Hej! Skriv kommando /cocktail för att få upp random cocktail namn."
        
    }else  {
        const commando = document.getElementById("commando") 
        commando.innerText = ""
    }
    
    }
   }, false);


   let sendWithEnterKey = document.getElementById("message");
   sendWithEnterKey.addEventListener("keypress", function(e) {
     if (e.key === "Enter") {
       e.preventDefault();
       document.getElementById("msgBtn").click();
    }

   });



   // Ta bort??
/* const addUser = document.getElementById("saveNameBtn")
addUser.addEventListener("click", (e) => { 
    e.preventDefault()
    const msg = document.getElementById("name").value
    socket.emit("msg", msg) 

    appendMessage("Välkommen")
    socket.emit("new-user", (name)) // skickar till servern
    // msg.value = ""; 

    //if (msg.value.length <= 0) { } else { } 
})  */
