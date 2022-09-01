import express from 'express'
import fetch from 'node-fetch'


export const router = express.Router()

// Externa API - cocktails
router.get("/api/cocktails", async (req, res) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = await response.json() 
    res.json(data) 
  }catch(err) {
    console.error(err)
  }
})


// Externa API - GIFS
router.get("api/emojis", async (req, res) => {
    try {
      const response = await fetch('https://mojitok-mojitok-emoticons-v1.p.rapidapi.com/packages?language=en')
      const data = await response.json() 
      res.json(data) 
    }catch(err) {
      console.error(err)
    }
})


router.get("", (req, res) => {
  try {
    res.json()
  } catch(err) {
      console.error(err)
  }
})


router.post("", (req, res) => { 
  try { 
    res.json()  
  } catch (err) {
    console.error(err)
  }
})


router.use((err, req, res, next) => {
  console.log(err.status)
  console.log(err.message)
  res.status(500).json(err)
})

