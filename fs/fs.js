const fs = require('fs');

//Lee un archivo dada una direccion               Conversion de caracteres 
const first = fs.readFileSync('./data/first.txt');
const second = fs.readFileSync('./data/second.txt', 'utf-8');

console.log(first.toString());
console.log(second);
