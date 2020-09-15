// Creación del servidor web
let http = require('http');
let rutas = require('./rutas')

let servidor = http.createServer(rutas);

servidor.listen(8081);