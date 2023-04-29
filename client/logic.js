const socket = io();



let nickname = "Martin"



const sendMsg = () => {



}



// Tar in nyckeln som ska matcha med nyckeln som kommer från servern? - samma som urlen i fetvh.

socket.on("newSocket", (socketId) => { // skickar med det nya socket.Id

    console.log("New socket connecter: " + socketId)

})




socket.on("welcome", (msg) => {

    console.log(msg)

})



socket.on("msg", (msgObj) => {

    console.log(`${msgObj.msg} : ${msgObj.nickname}`)

})




document.getElementById("msgBtn").addEventListener("click", () => {

    console.log("SKICKA");

    const msg = document.getElementById("msg").value

    socket.emit("msg", { msg, nickname })

})