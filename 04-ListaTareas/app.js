"use strict"
//import {mostrarMenu, pausa  } from "./menus/menuInput.js";
import { mostrarMenuInquirer, pausa, leerInput, mostrarTareas, listadoTareaBorrar } from "./menus/menuInquirer.js";
import { Tareas } from "./models/tarea.js";
import { readTareas, saveTareas } from "./saveGetBD/BDTareas.js";
console.clear();

const main= async()=>{
    let opcion;
    const tareas= new Tareas(); //crear el objeto tareas
    //leer las tareas del fichero y guardarlas en el array
    const tareasJSON=readTareas(); 
   
    if (tareasJSON){
        tareas.cargarTareasFromArray(tareasJSON);
    }
    console.log('Hola mundo');
    do{
        // opcion= await mostrarMenu();
        opcion = await mostrarMenuInquirer();
        switch (opcion) {
            case '1':
                const desc = await leerInput("descripción");
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
               tareas.listadoPendCompl(true)
                break;
            case '4':
                tareas.listadoPendCompl(false)
                break;
            case '5':
                  const ids= await mostrarTareas(tareas.listTareas);
                  tareas.completarTareas(ids);
                 break;
            case '6':
                 const id= await listadoTareaBorrar(tareas.listTareas);
                 tareas.borrarTarea(id);
                 break;
            default:
                break;
        }
        if (opcion!=='0') await pausa(); //Si es cero no muestra la pausa
    }while (opcion !== '0');
    //grabar tareas
    saveTareas(tareas.listTareas.map(tarea=>({
        id:tarea.id,
        desc:tarea.desc,
        completada:tarea.completada
      })
    ))
   
}

main();