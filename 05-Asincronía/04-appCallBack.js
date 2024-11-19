"use strict"

const ejecutarCallBack=(callback)=>{
    console.log('Iniciando ...');
    setTimeout(()=>{
        console.log('hola');
        callback();
    },1500)
}
const finalizarGuion=()=>{
    console.log('...Finalizado');
}

ejecutarCallBack(finalizarGuion);
