"use strict"
import { pool } from '../db.js'

export const getAlumnos = async (req, res)=>{
    try {
        const [result] =await pool.query("SELECT * FROM alumnos");
     res.status(200).json(result);
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}

export const getAlumno = async (req, res)=>{
   
    //extraer el id de la url
    const {id} =req.params;
    try {
        const [result] =await pool.query("SELECT * FROM alumnos WHERE idAlumno=?", [id]);
     res.status(200).json(result);
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}
export const addAlumno = async (req, res)=>{
   
    //extraer los campos del body
    console.log(req.body);
    const {nomApe, idCurso} = req.body
    
    try {
        const [result] =await pool.query("INSERT INTO alumnos (apellidosNombre, idCurso) VALUES (?,?)", [nomApe, idCurso]);
             
        if (result.affectedRows == 1){
            res.status(201).json({id :result.insertId});
        }else{
            res.status(400).json({message :'Alumno no insertado'});
        }
        
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}
export const delAlumno = async (req, res)=>{
   
    //extraer los campos del body
    const {id} = req.params
    
    try {
        const [result] =await pool.query("DELETE FROM alumnos WHERE idAlumno=?", [id]);
             
        if (result.affectedRows == 1){
            res.status(200).json({message:'Alumno borrado'});
        }else{
            res.status(400).json({message :'Alumno no borrado'});
        }
        
     } catch (error) {
        res.status(500).json({message:'Error al borrar el alumno'});
     }
     
}