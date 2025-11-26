require('dotenv').config()
const http = require("http")

function requestController(){
    document.getElementById("saludo").textContent ="!Ejemplo de conexcion¡";
    //console.log("Gracias Totales")
}

//configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en puerto:" + PORT)
})

