const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {

  const id = req.params.id

  //leitura da tabela users, resgatar um usuario
  console.log(`Estamos buscando pelo usuário: ${id}`)
  res.sendFile(`${basePath}/user.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log("Conectado na porta 3000")
})