"use strict"
//Importar el paquete express
import express from 'express'

//Definer el puerto
const PORT =3000;

//crear una aplicación express
const app=express();


 //ruta principal
 app.get('/', (req,res)=>{
    res.send("¡Hola Mundo del Servidor Node.js!")
 })

 app.get('/clientes', (req,res)=>{
    res.send("¡Pagina de Cliente!")
 })  

 //manejar las rutas no encontradas (404)
 app.use((req, res)=>{
    res.status(404).send("¡¡¡Página errónea!!!")
 }) 
       
//iniciar el servidor y escuchar por el puesto establecido
app.listen(PORT, ()=>{
    console.log(`¡Servidor corriendo en la URL https://localhost:${PORT}` );
})
