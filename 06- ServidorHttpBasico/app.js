"use strict"
//Importar el módulo https de Node.js
import http from 'http'

//Definer el puerto
const PORT =3000;

//crear el servidor

const server= http.createServer((req,res)=>{
    //verificar la ruta de la solicitur
    if (req.url === "/"){
        res.end("¡Hola Mundo del Servidor Node.js!")
    }else if (req.url === "/clientes"){
        res.end("¡Pagina de Cliente!")
    } else{
        //página errónea
        res.writeHead(404,{'Content-Type': "text/plain"} );
        res.end ("¡¡¡Página errónea!!!")
    }
})
//inicar el servidor y escuchar por el puesto establecido
server.listen(PORT, ()=>{
    console.log(`¡Servidor corriendo en la URL https://localhost:${PORT}` );
})
