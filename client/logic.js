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



function renderMessage(message) {
    const messages = document.getElementById("receivedMsg") 
    let element = document.createElement("p") 
    element.classList.add("outputMsg")
    element.innerHTML += message + "<br>"  
    messages.append(element)
}


const sendMsg = document.getElementById("msgBtn")
sendMsg.addEventListener("click", (e) => {
    e.preventDefault()
    
    const input = document.getElementById("message")
        const inputForm = input.value
        // socket.emit("msgApi", inputForm) - Detta ska bort och vi ska bara använda socket.emit("msg")  
        socket.emit("msg", inputForm) 
        input.value = "";
}) 


// API relaterat
const msgApi = message.addEventListener('input', (e) => { 

    if (e.target.value == "/") {
        const input = document.getElementById("message")

        if (input.value == "/") { 
            const commando = document.querySelector("#commando") 
            commando.innerHTML = "Hej! Skriv kommando /cocktail för att få upp random cocktail namn."

            // SE ÖVER TOGGLE-DELEN!!!!!!

        /*   if(e.target.value == "/") {
                commando.classList.toggle("active"); 
                console.log(commando)
            }  */

           /*  if(value.length == 0 ) {
                commando.classList.toggle("active"); 
                console.log(commando)
            }  */

        } else {
           /*  const commando = document.querySelector("#commando")  */
            /* commando.innerHTML = "" */ 
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



