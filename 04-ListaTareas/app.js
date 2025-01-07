"use strict"
import { getTareas, saveTareas } from "./menus/BDTareas.js";
//import {mostrarMenu, pausa  } from "./menus/mensajes.js";
import { inquirerMenu, leerInput, listadoTareasBorrar, mostrarTareas, pausa } from "./menus/inquirer.js";
import { Tareas} from "./models/tarea.js";

console.clear();

const main= async()=>{
    //console.log('Hola mundo');
    let opcion='';
    let tareas= new Tareas(); //crear la clase donde se guardarán las tareas
    
    const tareasJson=getTareas(); //leer del fichero
    if (tareasJson){ //comprobar si hay tareas
         tareas.cargarTareasFromArray(tareasJson); //cargar las tareas al array del objeto
     }
   
    do{
     // opcion= await mostrarMenu(); tecleando el número de opción
     opcion =await inquirerMenu();
     switch (opcion) {
        case '1':
            const desc=await leerInput('descripcion');
            tareas.crearTarea(desc)
            break;
        case '2':
            tareas.listadoCompleto();
            break;
        case '3':
            tareas.listadoPendCompl(true);
            break;
        case '4':
            tareas.listadoPendCompl(false);
            break;
        case '5':
            const ids= await mostrarTareas(tareas.listTareas)
            //console.log({ids});
            tareas.completarTareas(ids)
            break;
        case '6':
            const id= await listadoTareasBorrar(tareas.listTareas);
            //console.log({id});
            tareas.borrarTarea(id)
            break;
        default:
            break;
     }
      if (opcion !=='0') await pausa();
    }while(opcion !=='0')
    
   //Al salir que guarde las tareas
  //console.log(tareas.listTareas.map(tarea=>tarea))
    saveTareas(tareas.listTareas.map(tarea=>({
        id: tarea.id,
        desc: tarea.desc,
        completada: tarea.completada
    })));
}

main();