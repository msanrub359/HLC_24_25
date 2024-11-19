import colors from "colors";
import readline from "readline";

export const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=========================".green);
    console.log("  Seleccione una opción  ".green);
    console.log("=========================".green);

    console.log(`${"1".green}. Crear tarea`);
    console.log(`${"2".green}. Listar tareas`);
    console.log(`${"3".green}. Listar tareas completadas`);
    console.log(`${"4".green}. Listar tareas pendientes`);
    console.log(`${"5".green}. Completar tarea(s)`);
    console.log(`${"6".green}. Borrar tarea`);
    console.log(`${"0".green}. Salir\n`);

    //readline es un paquete que permite interactuar con el usuario a través
    //de la consola
    const entrada = readline.createInterface({
      input: process.stdin, //establece la entrada estándar
      output: process.stdout, //establece la salida estándar
    });

    entrada.question("Seleccione una opcion: ", (opcion) => {
      //console.log({ opcion });
      entrada.close(); //cerrar la interfaz
      resolve(opcion)
    });
  });
};

export const pausa = () => {
    return new Promise( resolve =>{
        const entrada = readline.createInterface({
            input: process.stdin, //establece la entrada estándar
            output: process.stdout, //establece la salida estándar
          });
        
          entrada.question(`\nPresione ${"ENTER".green} para continuar`, (opcion) => {
           // console.log({ opcion });
            entrada.close(); //cerrar la interfaz
            resolve ()
          });
    })
  
};
