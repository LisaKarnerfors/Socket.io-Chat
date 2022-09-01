import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 3000

app.use(express.json()) 
app.use("/", express.static("client"))


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


// Externa API - GIFS
app.get("api/emojis", async (req, res) => {
    try {
      const response = await fetch('https://mojitok-mojitok-emoticons-v1.p.rapidapi.com/packages?language=en')
      const data = await response.json() 
      res.json(data) 
    }catch(err) {
      console.error(err)
    }
})


app.get("", (req, res) => {
  try {
    res.json()
  } catch(err) {
      console.error(err)
  }
})


app.post("", (req, res) => { 
  try { 
    res.json()  
  } catch (err) {
    console.error(err)
  }
})


app.use((err, req, res, next) => {
  console.log(err.status)
  console.log(err.message)
  res.status(500).json(err)
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})