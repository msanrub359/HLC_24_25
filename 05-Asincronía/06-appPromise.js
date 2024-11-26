"use strict"

const ejecutarPromesa=()=>{
    console.log('Iniciando ...');
    //realizar la promesa
    return new Promise((resolve, reject)=>{
        const exito=Math.random() > 0.5 //generar true o false
        setTimeout(()=>{
            if (exito){
                resolve("Primer tiempo muerto completado")
            }else{
                reject("Error: El tiempo muerto falló")
            }
           
        },1500)
    })
    
}
const finalizarGuion=()=>{
    console.log('...Finalizado');
}

//usar promesa
ejecutarPromesa()
    .then (mensaje=>{
        console.log(mensaje);
        finalizarGuion()
    })
    .catch(error=>{
        console.log(error);
    })
