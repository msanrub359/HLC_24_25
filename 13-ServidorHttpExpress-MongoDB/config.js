"use strict"
import {config} from 'dotenv';

//leer las variables globales
config();
//acceder a las variables globales: process.env

export const PORT= process.env.PORT || 3000
export const URL="<cadena de conexión>"
// export const DB_HOST = process.env.DB_HOST ||'localhost';
// export const DB_PORT = process.env.DB_PORT ||3306;
// export const DB_USER = process.env.DB_USER ||'root';
// export const DB_PASSWOWRD = process.env.DB_PASSWOWRD ||'';
// export const DB_DATABASE = process.env.DB_DATABASE || '_ciclostrassierra';
