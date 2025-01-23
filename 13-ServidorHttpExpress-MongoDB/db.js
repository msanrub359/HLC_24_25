"use strict"

import { MongoClient } from 'mongodb';

import { URL} from './config.js';

//crear la instancia del cliente MOngoDB utilizando la URL
const clienteMongoDB= new MongoClient(URL);
let conexion;

export const conexionBD=async ()=>{
    //conectar con la BD
    try {
        if (!conexion){
            conexion= await clienteMongoDB.connect();
            console.log('Conexión exitosa a la BD MongoDB');
        }
        return conexion.db("ciclostrassierra")
    } catch (error) {
        console.log(error);
        console.log("Error al conectar a la BD de MongoDB");

        //cerrar el cliente en caso de error
        await clienteMongoDB.close();
    }
}

