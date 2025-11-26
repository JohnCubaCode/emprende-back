const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config()
const http = require("http");
const { execArgv } = require("process");

// <function requestController(){
//     console.log("Gracias Totales")
// }
// //configurar nuestro servidor
// const server = http.createServer(requestController)

// server.listen(PORT, function(){
//     console.log("Aplicacion corriendo en puerto:" + PORT)
// })>

// Servir un archivo HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});