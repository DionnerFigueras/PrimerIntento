const fs = require('node:fs')

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err, text ) =>{
    console.log('Primer texto: \n', text)
})

console.log('Pausa para hacer cosas jeje');

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text2) => {
    console.log('Segundo texto: \n',text2)
})
