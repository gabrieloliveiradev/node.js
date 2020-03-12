var funcoes = require("./funcoes.js")
var n1=2
var n2=4

const express = require("express")
const app = express(); //criando uma instancia do express
let port= 8081

//rota principal
//send = função do express
//end = função do http
app.get('/', (req, res)=>{
    res.send('<h1>Calculadora</h1>' + funcoes.soma(n1,n2))
})

app.listen(port, function(){
    console.log(`Servidor rodando em http://localhost:${port}`)
})



// var func1 = funcoes.soma(3,2)
// console.log(func1)
// var func2 = funcoes.subtracao(1,2)
// console.log(func2)
// var func3 = funcoes.mult(2,2)
// console.log(func3)
// var func4 = funcoes.divisao(10,2)
// console.log(func4)