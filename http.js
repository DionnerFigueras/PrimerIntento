const http = require('http');

http.createServer(function (request, response){
    response.write('Hola q hace')
    response.end()
}).listen(5050);

console.log('Servidor escuchando en el puerto 5050');
