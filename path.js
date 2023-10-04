const path = require("path");

const filePath = path.join('public', 'dist', '/style', 'main.css');

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));