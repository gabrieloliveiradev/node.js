console.log("Olá mundo!!!!")

// criar a identidade do projeto npm init
//observar que foi criado o arquivo package.json (javascript object notation) que contém informações do projeto.
//instalar o framework de node -> express
// executar o comando: npm install express

let express = require('express')
let app = express()
let port = 8081

app.get('/', (req, res)=>{
    res.send('<h1>Home</h1>')
})

app.listen(port, () => {
    console.log(`Servidor rodando em localhost:${port}`)
})