"use strict"
import { ObjectId } from 'mongodb';
import { conexionBD } from '../db.js'

export const getAlumnos = async (req, res)=>{
    try {
       const database=await conexionBD();
       const collection=database.collection("alumnos");
       //realizar la operación de inserción
       //sort ordena el array de objetos por el campo establecido
       //1: Orden ascendente
       //-1 Orden descendente
       const result=await collection.find({}).sort({apellidosNombre:1}).toArray(); 
       //envia el servidor la respuesta
       res.status(200).json(result);
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}

export const getAlumno = async (req, res)=>{
   
    //extraer el id de la url
    const {id} =req.params;
    try {
     const database=await conexionBD();
     const collection=database.collection("alumnos");
    //realizar la operación de inserción
     const result=await collection.find({_id: new ObjectId()}).toArray();
     res.status(200).json(result);
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}

export const getAlumnoIdCurso = async (req, res)=>{
   
    //extraer el id de la url
    const {idCurso} =req.params;
    console.log(idCurso);
    try {
        const database=await conexionBD();
        const collection=database.collection("alumnos");
       //realizar la operación de inserción
        const result=await collection.find({idCurso: idCurso}).toArray();
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
        const database=await conexionBD();
        const collection=database.collection("alumnos");
       //realizar la operación de inserción
        const result=await collection.insertOne({apellidosNombre:nomApe, idCurso});
        console.log(result);
        const {acknowledged,insertedId} =result;
       
        if (acknowledged){ //Si es true ha realizado la insercción
            res.status(200).json({id:insertedId});
        }else{
            res.status(400).json({message:'El alumno no ha sido insertado'});
        }
          
        
     } catch (error) {
        res.status(500).json({message:'Error al obtener los alumnos'});
     }
     
}

export const updatePutAlumno = async (req, res)=>{
   
     //extraer los campos del body
     console.log(req.body);
     const {nomApe, idCurso} = req.body
     //extraer el parámetro de la URL
     const {id} =req.params;
     try {
         const database=await conexionBD();
         const collection=database.collection("alumnos");
        //realizar la operación de actualización
         const result=await collection.updateOne({_id:new ObjectId(id)},{$set: {apellidosNombre:nomApe, idCurso}});
         console.log(result);
       
         const {acknowledged,modifiedCount} =result;
        
         if (acknowledged){ //Si es true ha realizado la actualización
            if (modifiedCount==1){
                res.status(200).json({message: 'El alumno ha sido actualizado'});
            }else{
                res.status(200).json({message: 'No hay cambios que actualizar'});
            }
             
         }else{
             res.status(400).json({message:'Error, ell alumno no ha sido actualizado'});
         }
           
         
      } catch (error) {
         res.status(500).json({message:'Error al obtener los alumnos'});
      }
     
}


export const delAlumno = async (req, res)=>{
   
    //extraer los campos del body
    const {id} = req.params
    
    try {
        const database=await conexionBD();
        const collection=database.collection("alumnos");
       //realizar la operación de inserción
        const result=await collection.deleteOne({_id:new ObjectId(id)});
        console.log(result);  
        const {deletedCount} =result; 
       if (deletedCount == 1){
            res.status(200).json({message:'Alumno borrado'});
        }else{
            res.status(400).json({message :'Alumno no borrado'});
        }
        
        
     } catch (error) {
        res.status(500).json({message:'Error al borrar el alumno'});
     }
     
}