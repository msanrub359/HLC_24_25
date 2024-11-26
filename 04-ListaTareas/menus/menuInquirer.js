"use strict";
import colors from "colors";
import inquirer from "inquirer";

const preguntas=[{
  type:'list',
  name: 'opcion',
  message: '¡Qué desea hacer!',
  choices :[
    {
      value:'1',
      name:`${"1.".green} Crear lista`
    },
    {
      value:'2',
      name:`${"2.".green} Listar tareas`
    },
    {
      value:'3',
      name:`${"3.".green} Listar tareas completas`
    },
    {
      value:'4',
      name:`${"4.".green} Listar tareas pendientes`
    },
    {
      value:'5',
      name:`${"5.".green} completar tarea(s)`
    },
    {
      value:'6',
      name:`${"6.".green} Borrar tarea`
    },
    {
      value:'0',
      name:`${"0.".green} Salir`
    },
  ]

}]

export const mostrarMenuInquirer = async() => {

    console.clear();
    console.log("========================".green);
    console.log(" Seleccione una opción".green);
    console.log("========================".green);

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
 
};

export const pausa = async () => {
  const pregunta=[{
    type:'input',
    name: 'enter',
    message: `Presione ${"Enter".green} para continuar`,
  }]
  await inquirer.prompt(pregunta);
};

export const leerInput = async (mensaje) => {
  const pregunta=[{
    type:'input',
    name: 'desc',
    message: mensaje,
    validate (value){
      if (value.trim().length ===0){
        return 'Por favor, introduzca un valor\n'
      }else{
        return true
      }
    }
  }]
  const {desc} =await inquirer.prompt(pregunta);
  return desc
};
