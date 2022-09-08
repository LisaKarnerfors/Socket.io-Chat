const socket = io();

let nickname = "";

socket.on("userConnected", (socketId) => {
    console.log("New user/socket connected " + socketId);
})


const addNickname = document.getElementById("saveNameBtn")
addNickname.addEventListener("click", (e) => {
    e.preventDefault()
    const msg = document.getElementById("name").value
    socket.emit("msg", msg, nickname) 
    /* msg.value = "";  */


   /* const msg = document.getElementById("name")
        const nickname = msg.value
        socket.emit("msg", msg, nickname)
        msg.value = ""; */

/*   
if (msg.value.length <= 0) {
} else {

    } */
})


const sendMsg = document.getElementById("msgBtn")
sendMsg.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.getElementById("msg")
        const inputForm = input.value
        socket.emit("msg", inputForm, nickname)
        input.value = "";

    /* if(inputForm.value.length === 0) {
    } else {
        const messages = document.getElementById("receivedMsg") 
        messages.innerHTML = "Var vänlig fyll i användarnamn"
    } */
    /* if (socket.id ===) {

    } */
}) 


const msgAPi = msg.addEventListener('input', (e) => { // ifsats för att få ut fler val när man kör kommandon / - byt api?
    if (e.target.value == "/") {
        const input = document.getElementById("msg")
        input.value = "/cocktail"
    }
   }, false);

/*    if (e.target.value == "/") {
    const input = document.getElementById("msg")
    input.value = "/"
}
   */
   //msgBtn posted on enter click
   let sendWithEnterKey = document.getElementById("msg");
   sendWithEnterKey.addEventListener("keypress", function(e) {
     if (e.key === "Enter") {
       e.preventDefault();
       document.getElementById("msgBtn").click();
    }
   });

// varför ligger det vi skriver ut i en socket.on?
socket.on("msg", (msgApi) => {
    console.log(msgApi)
    const messages = document.getElementById("receivedMsg") 
    messages.innerHTML += nickname + msgApi + "<br>" // fixa så att vi får ut nickname varje gång?
  
})

/* messages.innerHTML = `${msgAPi.nickname} : ${msgAPi.msg}`;  */
