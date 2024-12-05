"use strict"
//Importar el paquete express
import express from 'express'
import { routerAlumnos } from './routes/alumnos.routes.js';
import { routerCursos } from './routes/cursos.routes.js';
import { routerModulos } from './routes/modulos.routes.js';

//Definer el puerto
const PORT =3000;

//crear una aplicación express
const app=express();

//Usar las rutas directas;
app.use(routerAlumnos);
app.use(routerCursos);
app.use(routerModulos);
 //ruta principal


app.get('/', (req,res)=>{
    res.send("¡Hola Mundo del Servidor Node.js!")
 })

 

 //manejar las rutas no encontradas (404)
 app.use((req, res)=>{
    res.status(404).send("¡¡¡Página errónea!!!")
 }) 
       
//iniciar el servidor y escuchar por el puesto establecido
app.listen(PORT, ()=>{
    console.log(`¡Servidor corriendo en la URL https://localhost:${PORT}` );
})
