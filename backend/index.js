require('dotenv').config()
const express = require('express')
const { Configuration, OpenAIApi } = require ('openai')
const { OPENAI_API_KEY, PORT } = process.env


const configuration = new Configuration({
  apiKey: OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
const app = express()
//aqui aplicamos um middleware
app.use(express.json())

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// const PORT = process.env.PORT


// GET localhost:4000/hello -> {"mensagem": "Hello direto do Back End"}
app.get('/hello', (req, res) => {
  res.json({mensagem: "Hello direto do Back End"})  
})

// POST localhost:4000/sentimentos ({"texto": "Estou feliz"}) ->  {"sentimento": "Positivo" }
app.post('/sentimentos', (req, res) => {
  const { texto } = req.body
  openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Diga qual o sentimento associado ao seguinte texto usando apenas uma palavra (Positivo, Negativo ou Neutro): ${texto}`,
    max_tokens: 100
  })
  .then(chatGPTResponse => {
    res.json({sentimento: chatGPTResponse.data.choices[0].text})
  })
  .catch(e => {
    console.log(e)
    res.status(500).end()
  })
})

const porta = PORT || 4000

app.listen(porta, () => console.log (`Servidor OK. Porta ${porta}`))