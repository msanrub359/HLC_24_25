"use strict"

const ejecutarCallBack=(callback)=>{
    console.log('Iniciando ...');
    setTimeout(()=>{
        console.log('Primer tiempo muerto completado');
        setTimeout(()=>{
            console.log('Segundo tiempo muerto completado');
            setTimeout(()=>{
                console.log('Tercer tiempo muerto completado');
                callback();
            },1500);
        },1500);
    },1500)
}
const finalizarGuion=()=>{
    console.log('...Finalizado');
}

ejecutarCallBack(finalizarGuion);
