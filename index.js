/*'use strict';
 http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hola Mundo');
});
server.listen(5000);*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=> {
    res.send('Hola Mundo, soy Derly')

})

app.listen(port, ()=> {
    console.log('la aplicación se está ejecuetando por el puerto' +port)
})
