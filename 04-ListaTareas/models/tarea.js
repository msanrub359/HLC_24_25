/** @module models/tarea.js */

import { v4 as uuidv4 } from "uuid";

/** Class representa una tarea */
export class Tarea {
  #id;
  #desc;
  #completada;
 /**
  * Constructor para crear una tarea
  * @param {string} descripcion 
  */
  constructor(descripcion) {
    this.id = uuidv4();
    this.desc = descripcion;
    this.completada = null;
  }
   // Getters y Setters
   /**
    * Get para id
    * @return {number} El valor de id
    */
  get id() {
    return this.#id;
  }
  set id(value){
    this.#id=value
  }
  get desc() {
    return this.#desc;
  }
  set desc(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("La descripción debe ser un string no vacío.");
    }
    this.#desc = value;
  }
  get completada() {
    return this.#completada;
  }
  set completada(value) {
    this.#completada = value;
  }
  
}

/** Class representa todas las tareas */
export class Tareas {
  #listTareas;

  
  constructor() {
    this.#listTareas = [];
  }

  get listTareas() {
    return this.#listTareas;
  }

  /**
   * Carga tareas desde un array.
   * @param {Array<Object>} tareas - Array de objetos con datos de las tareas.
   */
  cargarTareasFromArray(tareas) {
   
      this.#listTareas = tareas.map(tarea =>tarea);
      console.log(this.#listTareas );  
  }

  /**
   * Crea una nueva tarea y la agrega al listado.
   * @param {string} descripcion - Descripción de la nueva tarea.
   */
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this.#listTareas.push(tarea);
    
  }

   /**
   * Muestra todas las tareas en la consola con su estado.
   */
  listadoCompleto() {
    //1: en verde
    //compeltada: verde
    //Pendiente: rojo

    //1. tarea :: Completada || Pendiente
    //2. tareaII :: Completada || Pendiente

    this.#listTareas.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completada } = tarea;
     
      const estado = completada ? "Completada".green : "Pendiente".red;
      console.log(`${idx}. ${desc} :: ${estado}`);
    });
  }

   /**
   * Lista tareas en la consola filtradas por estado.
   * @param {boolean} completadas - Si es `true`, muestra completadas; de lo contrario, muestra pendientes.
   */
  listadoPendCompl(listComp = true) {
    let contador = 0;
    this.#listTareas.forEach((tarea) => {
      const { desc, completada } = tarea;
      const estado = completada ? "Completada".green : "Pendiente".red;
    
      if (listComp) {
        if (completada) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      } else {
        if (!completada) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      }
    });
  }

  /**
   * Elimina una tarea por su ID.
   * @param {string} id - ID de la tarea a eliminar.
   */
  borrarTarea(id){
    const indice= this.#listTareas.findIndex(tarea=> tarea.id===id);

    //borrar con splice
    this.#listTareas.splice(indice, 1);
  }

  /**
   * Marca las tareas especificadas como completadas.
   * @param {string[]} ids - Array de IDs de las tareas a completar.
   * 
   */
  completarTareas(ids=[]){
    //Recorrer el array de tareas
    this.#listTareas.forEach (tarea=>{
      if (ids.includes(tarea.id)){
        tarea.completada = tarea.completada || new Date().toLocaleDateString();
      }
    })
  }
}
