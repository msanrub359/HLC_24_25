"use strict"

import {writeFileSync, readFileSync, existsSync} from "fs";
/**
 * @type {string}
 * @ * default './BD/Tareas.json';
 */
const BD= './BD/Tareas.json';

export const saveTareas=(data)=>{
    try{
        writeFileSync(BD, JSON.stringify(data));
        console.log('Guardadas tareas');
    }catch (err){
        console.error(err)
    }
    

}

export const readTareas=()=>{
  if (existsSync(BD)){
    const data=readFileSync(BD, {encoding: 'utf-8'});
    return JSON.parse(data)
  }else{
    return null;
  }
}

