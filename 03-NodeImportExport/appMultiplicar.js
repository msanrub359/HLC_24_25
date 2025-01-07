"use strict";
import { writeFile } from "fs";

const base = 3;
let salida = "";

console.clear(); //borra consola
console.log("===================");
console.log(`  Tabla del ${base}`);
console.log("===================");

//realizar la tabla de multiplicar
for (let index = 1; index <= 10; index++) {
  salida += `${base} x ${index} = ${base * index}\n`;
}
//mostrar tabla
console.log(salida);
//crear fichero
writeFile(`./tablas/TablaMult${base}.txt`, salida, (err) => {
  if (err) {
    throw console.log(err);
  } else {
    console.log("La tabla ha sido guardada");
  }
});
