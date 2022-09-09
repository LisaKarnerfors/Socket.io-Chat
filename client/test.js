
/* async function onLoad() {
    await loadElement()
 } */
 
/* 
socket.on('message-from-others', function(msg) {
    const messageContainer = document.getElementById("message-area")

        let messageElement = document.createElement("div")
        messageElement.classList.add("message-others")

        let text = document.createElement("p")
        text.innerHTML += message
        messageElement.append(text) 

        messageContainer.append(messageElement)
        //document.getElementById("message-area").innerHTML += message; 

        console.log(msg)
})


function sendMessage(message) {
    const messageForm = document.getElementById("message")

    let element = document.createElement("div")
    element.classList.add("message-my")

    let myText = document.createElement("p")
    myText.innerHTML += message        
    element.append(myText) 

    messageForm.append(element)
    socket.emit('codeboard-message', message);
}  */


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


/* window.addEventListener('load', onLoad)  */