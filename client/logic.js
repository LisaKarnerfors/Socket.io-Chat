const socket = io();


const name = prompt('Fyll i användarnamn för att ansluta till chatten!')
renderMessage("Välkommen" + " " + (name))
socket.emit("new-user", (name))

socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})

socket.on("user-connected", name => {
    renderMessage(`${name} är ansluten!`)
}) 


socket.on("msg", (message)  => {
    renderMessage(`${message.name}: ${message.message}`)
 }) 

window.scrollTo(300,300)

function renderMessage(message) {
    const messages = document.getElementById("receivedMsg") 
   
    let element = document.createElement("p") 
    element.scrollTo = element.scrollHeight
    element.classList.add("outputMsg")
    element.innerHTML += message + "<br>"  
    messages.append(element)

}

const sendMsg = document.getElementById("msgBtn")
sendMsg.addEventListener("click", (e) => {
    e.preventDefault()
    
    const input = document.getElementById("message")
        const inputForm = input.value
        socket.emit("msg", inputForm) 
        input.value = "";
}) 


const msgApi = message.addEventListener('keyup', (e) => { 
    const commando = document.querySelector("#commando")  
        if (e.target.value.startsWith("/")) { 
            commando.innerHTML = "Hej! Skriv kommando /cocktail för att få upp random cocktail namn."
        } else {
            commando.innerHTML = "" 
        } 
    }, false);


   let sendWithEnterKey = document.getElementById("message");
   sendWithEnterKey.addEventListener("keypress", function(e) {
     if (e.key === "Enter") {
       e.preventDefault();
       document.getElementById("msgBtn").click();
    }

   });



