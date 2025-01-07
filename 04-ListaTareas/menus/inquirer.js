import inquirer from 'inquirer'
import colors from 'colors'; 

const preguntas= [{
    type: 'list',
    name : 'opcion',
    message: '¿Qué desea hacer?',
    //choices: ['opc1', 'opc1', 'opc3']
    choices : [
              {
                value: '1',
                name: `${'1.'.green} Crear tarea`
              },
              {
                value: '2',
                name: `${'2.'.green} Listar tareas`
              },
              {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
              },
              {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`
              },
              {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
              },
              {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
              },
              {
                value: '0',
                name: `${'0.'.green} Salir`
              }
            ]
        
}]

export const inquirerMenu = async()=>{

    console.clear();
    console.log("=========================".green);
    console.log("  Seleccione una opción  ".green);
    console.log("=========================".green);

    const {opcion}= await inquirer.prompt (preguntas);
    return opcion;
}

export const pausa = async() => {
    const pregunta =[{
        type: 'input',
        name: 'enter',
        message: `Presione ${"ENTER".green} para continuar`
    }]

    await inquirer.prompt(pregunta)
    
 }  

 export const leerInput =async(mensaje)=>{
  const pregunta={
    type:'input',
    name: 'desc',
    message: mensaje,
    validate(value){
      if (value.trim().length===0){
        return 'Por favor introduzca un valor\n'
      }
      return true
    }
  }

  const {desc}=await inquirer.prompt(pregunta);
  return desc
    

 }

 /**
  * 
  * @param {Array} tareas | array donde se encuentran todas las tareas
  */
 export const listadoTareasBorrar=async(tareas= [])=>{
  const choices = tareas.map((tarea, index)=>{
    const idx= `${index+1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`
    }
  }) 

  //mostrar el prompt
  const preguntas= [{
    type: 'list',
    name : 'id',
    message: 'Borrar',
    choices //al ser iguales se puede omitir choices
  }]
  const {id} = await inquirer.prompt(preguntas);
  return id;
   
 }

 /**
  * 
  * @param {Array} tareas | array donde se encuentran todas las tareas
  */
 export const mostrarTareas=async(tareas= [])=>{
  const choices = tareas.map((tarea, index)=>{
    const idx= `${index+1}.`.green
    return {
      value: tarea.id,
      name: `${idx} -  ${tarea.desc}`,
      checked: (tarea.completada)? true : false //Solo está a seleccionada las completadas
      //true pone todas las opciones completadas
    }
  }) 

  //mostrar el prompt
  const preguntas= [{
    type: 'checkbox',
    name : 'ids',
    message: 'Selecciones',
    choices //al ser iguales se puede omitir choices
  }]
  const {ids} = await inquirer.prompt(preguntas);
  return ids;
   
 }


