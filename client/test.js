
// Kolla igenom detta...
socket.on('message-from-others', function(msg) {

    const  messageContainer = document.getElementById("message-area").value
   
    messageElement = document.createElement("div")
    messageElement.classList.add("message-box-others-message-box")

    messageOthers = document.createElement("div")
    messageOthers.classList.add("message-others-message")

    separator = document.createElement("div")
    separator.classList.add("separator")

    messageContainer.append(messageElement)
    messageContainer.append(messageOthers)
    messageContainer.append(separator)

    document.getElementById("message-area").innerHTML += message;

    console.log(msg)
})

// SE ÖVER DETTA 9e
function sendMessage(message) {

    let messageForm = document.getElementById("message").value
   
    let element = document.createElement("div")
    element.classList.add("message-box-my-message-box")
    element.innerHTML += message + "<br>"  

    let messageMy = document.createElement("div")
    messageMy.classList.add("message-my-message")

    let separatorTwo = document.createElement("div")
    separatorTwo.classList.add("separator")

    // Is not a function???
    messageForm.append(element)
    messageForm.append(messageMy)
    messageForm.append(separator)

    

   /*  var message = document.getElementById("typing-box").value;
    var element = 
    
    '<div class="message-box my-message-box">' +
                    '<div class="message my-message"> ' + message + ' </div>' +
                    '<div class="separator"></div>' +
                '</div>';
                
    document.getElementById("message-area").innerHTML += element;
    document.getElementById("typing-box").value = ""; */
    
    socket.emit('codeboard-message', message);
}

// Båda socketsarna hamnar här, fixa så de är olika funktioner?? 
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




