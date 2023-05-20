require('dotenv').config()
const express = require('express')
const app = express()
//aqui aplicamos um middleware
app.use(express.json())

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// const PORT = process.env.PORT

const { OPENAI_API_KEY, PORT } = process.env

// GET localhost:4000/hello -> {"mensagem": "Hello direto do Back End"}
app.get('/hello', (req, res) => {
  res.json({mensagem: "Hello direto do Back End"})  
})

// POST localhost:4000/sentimentos ({"texto": "Estou feliz"}) ->  {"sentimento": "Positivo" }


const porta = PORT || 4000

app.listen(porta, () => console.log (`Servidor OK. Porta ${porta}`))