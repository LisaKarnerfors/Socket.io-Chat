const socket = io();

const messageForm = document.getElementById("chat")
const messageInput = document.getElementById("message")


const name = prompt('What is your name?')
appendMessage("Välkommen")
socket.emit("new-user", (name)) 


// Socket on
socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})

socket.on("msg", message  => {
    appendMessage(`${message.name}: ${message.message}`)
}) 

socket.on("user-connected", name => {
    appendMessage(`${name} är ansluten!`)
}) 

// Ta bort??
/* const addNickname = document.getElementById("saveNameBtn")
addNickname.addEventListener("click", (e) => { 
    e.preventDefault()
    const msg = document.getElementById("name").value
    socket.emit("msg", msg) 

    appendMessage("Välkommen")
    socket.emit("new-user", (name)) // skickar till servern
    // msg.value = ""; 

    //if (msg.value.length <= 0) { } else { } 
})  */



const sendMsg = document.getElementById("msgBtn")
sendMsg.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.getElementById("message")
        const inputForm = input.value
        socket.emit("msg", inputForm)
        input.value = "";

    /* if(inputForm.value.length === 0) {
    } else {
        const messages = document.getElementById("receivedMsg") 
        messages.innerHTML = "Var vänlig fyll i användarnamn"
    } */
}) 

function appendMessage(message) {
    const messages = document.getElementById("receivedMsg") 
    //  if (socket.id === message.id) { } 
    messages.innerHTML += message + "<br>" 
}


// API
const msgApi = message.addEventListener('input', (e) => { 
    if (e.target.value == "/") {
        const input = document.getElementById("message")
        
        if (input.value == "/") { /* Fortsätt här med kommando */
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

