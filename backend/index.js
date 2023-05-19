const express = require('express')
const app = express()
//aqui aplicamos um middleware
app.use(express.json())

// GET localhost:4000/hello -> {"mensagem": "Hello direto do Back End"}
app.get('/hello', (req, res) => {
  res.json({mensagem: "Hello direto do Back End"})  
})

// POST localhost:4000/sentimentos ({"texto": "Estou feliz"}) ->  {"sentimento": "Positivo" }


const porta = 4000

app.listen(porta, () => console.log (`Servidor OK. Porta ${porta}`))