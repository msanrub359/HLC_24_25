"use strict"
const funcionDeLargaDuracion=()=>{
    const inicio= Date.now();
    while (Date.now()-inicio <5000){
        //no hace nada
    }
    return 'Hola'
}
//main script
console.log('Iniciando ...');
const resultado=funcionDeLargaDuracion();
console.log(resultado);
console.log('...Finalizado');
