var http = require("http")

http.createServer(function(requisicao, resposta){
    resposta.end("<h1 style='color: red'> Bem vindo ao meu site!</h1>")
}).listen(3000)

console.log("Meu servidor está rodando!")