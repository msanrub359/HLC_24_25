"use strict"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import { pool } from '../db.js'
import { REFRESH_SECRET_KEY, SECRET_KEY } from "../config.js"

export const login = async (req, res)=>{
    const {email, password} = req.body

    try {
        const [result] =await pool.query("SELECT * FROM usuarios where email=?", [email]);
        console.log(result);
        //comprobar si el email existe
        if (result.length==0){
            return res.status(401).json({message: "email y|o password incorrectas"})
        }
        //verificar la contraseña con bcrypt
        const validarPass= await bcrypt.compare(password, result[0].password);
        if (!validarPass){ //si no coincide
            return res.status(401).json({message: "email y|o password incorrectas"})
        }

        //generar el token
        const token = jwt.sign({id:result[0].id, createTo:new Date().toISOString()},SECRET_KEY,{
            "expiresIn": "1h"
        })
        //generar el resfresh_token (7 días)
        const refreshToken = jwt.sign({id:result[0].id, createTo:new Date().toISOString()},REFRESH_SECRET_KEY,{
            "expiresIn": "7d"
        })
        //guardar refresh token en una cookie HTTP-only
        res.cookie("refreshToken", refreshToken, {
           httpOnly:true, //La cooke es accesible solo por el servidor (no por JavaScript)
           secure:true,
           sameSite: "Strict" //protección CSRF
        })

        //devolver al usuario
        res.status(200).json(token);
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}
export const autenticarToken = (req, res, next)=>{
  //extraer el token de la petición (req)
  const autHeader = req.headers['authorization'];

  if (!autHeader){
    return res.status(403).json({message: 'token no proporcionado'})
  }
  //extraer el token de la constante autHeader
  const token = autHeader.split(" ")[1];
  console.log(token);
 

  //verificar la autenticidad del token
  jwt.verify(token, SECRET_KEY, (err, user)=>{
    if (err){ //no es correcto el token
       return res.status(403).json({message: 'token no válido'})
    }
    req.user=user;
    next(); //siigue el proceso
  })

}

export const register = async (req, res)=>{
     
  
    const {username, password, email} = req.body
  
    try {
        //comprobar que el email exista
        const [user]=await pool.query("SELECT * FROM usuarios where email=?", [email]);
        if (user.length==1){
            return res.status(400).json({message: "El email ya existe"})
        }
        console.log('pasa1');
        //generar el hash de la constraseña
        const rounds=10; //Número de rondas para el algorimo bcrypt
        const hashPass= await bcrypt.hash(password, rounds);
        
        const [result] =await pool.query("INSERT INTO usuarios (username, password, email) VALUES (?,?,?)", [username, hashPass, email]);
       
        if (result.affectedRows == 1){
            
            res.status(201).json({message: ' Usuario creado exitosamente' , id: result.insertId});
        }else{
            res.status(400).json({message :'Usuario no insertado'});
        }
        
     } catch (error) {
        res.status(500).json({message:'Error al crear el usuario'});
     }
     
}

export const refreshToken=(req,res)=>{
    const refreshToken= req.cookies.refreshToken; //El refresh token viene en la cookie HTTP-only
    //validar que se envío el refresh token

    if (!refreshToken){
        return res.status(401).json({message: 'No hay refresh token, inicie sesión nuevamente'});
    }
    try{
        //verificar que el refresh token en válido
        const decodificarToken=jwt.verify(refreshToken, REFRESH_SECRET_KEY)
        if (!decodificarToken){
            return res.status(401).json({message: 'refresh token es inválido, inicie sesión nuevamente'});
        }
        //generar un nuevo token
        //generar el token
        const token = jwt.sign({id:result[0].id, createTo:new Date().toISOString()},SECRET_KEY,{
            "expiresIn": "1h"
        })
        res.status(200).json({accesToken:token});

    }catch{

    }
}


     