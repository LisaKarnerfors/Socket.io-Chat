import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

import fetch from 'node-fetch'

const app = express()
const httpServer = createServer();
const port = 3000;
const io = new Server(httpServer)

app.use(express.json()) 
app.use("/", express.static("./client")) 



// Externa API - cocktails
app.get("/api/cocktails", async (req, res) => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const data = await response.json() 
      res.json(data) 
    }catch(err) {
      console.error(err)
    }
  })
  

httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
})
   

