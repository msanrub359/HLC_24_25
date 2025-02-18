"use strict"
import {config} from 'dotenv';

//leer las variables globales
config();
//acceder a las variables globales: process.env

export const PORT= process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER ;
export const DB_PASSWOWRD = process.env.DB_PASSWOWRD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const SECRET_KEY= process.env.SECRET_KEY
export const REFRESH_SECRET_KEY= process.env.REFRESH_SECRET_KEY
