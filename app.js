// Cada vez que modifiquemos el código, grabamos los cambios con ctrl + s,
// luego dirigirse a la consola con ctrl + ñ y resetear el servidor con
// ctrl + c y luego volviendo a encenderlo con el comando node app.js

// El módulo httpes el que nos va a permitir crear un servidor que pueda recibir
// peticiones HTTP 
// para esto necesitamos primero crear un servidor



var http = require('http');
var dt = require('./moduloFechas');

const servidor = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('hola mundo!');
});
servidor.listen(3000);

/*
http.createServer(function (req,res) {
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.write("Fecha y Hora actual: " + dt.miFecha());
    res.end();
}).listen(3000);
*/

console.log('Servidor escuchando por el puerto 3000...');
