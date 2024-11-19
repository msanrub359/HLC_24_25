"use strict"
/** @module menus/tareaBDTareas.js */
import { existsSync, readFileSync, writeFileSync } from 'fs';

/**
 * Contiene la ruta del fichero donde se guardarán las tareas
 * @type {string}
 * @default './BD/Tareas.json'
 */
const bdTareas='./BD/Tareas.json';

/**
 * 
 * @param {Array} data | Contiene el array de tareas
 */
export const saveTareas=(data)=>{
   
    writeFileSync(bdTareas, JSON.stringify(data), (err)=>{
        if (err) throw console.log(err);
        console.log('Guardada la tarea');
    
    })
}

/**
 * 
 * @returns {Array} Retorna las tareas
 */
export const getTareas=()=>{
    if (!existsSync(bdTareas)){
        return null;
    }else{
        const datos=readFileSync(bdTareas, {encoding: 'utf-8'});
        return JSON.parse(datos)
       
    }

}