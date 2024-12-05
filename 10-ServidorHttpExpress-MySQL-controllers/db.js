"use strict"

import mysql from 'mysql2/promise';

//Configurar un pool de conexiones con MYSQL
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ciclostrassierra',
    waitForConnections : true, //Espera a la conexión si todas están ocupadas
    connectionLimit: 10, //Números máximo de conexiones simultáneas en el pool
    queueLimit: 0, //Limite para la cola de solicitudes (0 significa ilimitado)
});

//verificar si la conexión es exitosa
(async()=>{
    try {
        //Intentar crear una conexión
        const connection = await pool.getConnection();
        console.log('Conexión con MySQL establecida correctamente');
        //liberar la conexión
        connection.release();
    } catch (error) {
        console.log(`Error al conectar con MySQL ${error.message}`);
    }

})()
