/**
 * Ejemplo: Simulación de un proceso de compra en línea
 * -Revisar el inventario: Verificar si el producto está en stock
 * -Procesar el pago. Si el producto está disponible, procesa el pago
 * -Enviar confirmación de compra- Una vez aprobado el pago, envia un email de confirmación
 * Cada etapa será una función que devuelva una promesa
 */
const verificarInventario=(producto)=>{
    //crear una promesa
    return new Promise((resolve, reject)=>{
        console.log(`Verificando inventario para el producto ${producto}`);
        setTimeout(()=>{
            const aProductos=['camisa', 'pantalón'];
            //verificar que el producto exite en el almacen
            if (aProductos.includes(producto)){
                resolve("Producto en stock");
            }else{
                reject("Producto fuera de stock");
            }
        },2000)
    })
}

const procesarPago=(pago)=>{
    //crear una promesa
    return new Promise((resolve, reject)=>{
        console.log(`Procesando el pago...`);
        setTimeout(()=>{
            const saldoDisponible=100;
            //verificar si el cliente tiene saldo
            if (pago <= saldoDisponible){
                resolve("Pago aprobado");
            }else{
                reject("Saldo insuficiente para procesar el pago");
            }
        },2000)
    })
}
const enviarConfirmacion=(email)=>{
    //crear una promesa
    return new Promise((resolve, reject)=>{
        console.log(`Enviando confirmación de compra...`);
        setTimeout(()=>{
            
            //verificar si el cliente tiene saldo
            if (email.includes("@")){
                resolve("Confirmación de compra envíada al email");
            }else{
                reject("Email inválido");
            }
        },2000)
    })
}
//then/catch
// const realizarCompra=(producto, saldo, email)=>{
//  verificarInventario(producto)
//  .then (mensaje=>{
//     console.log(mensaje);
//     return procesarPago(saldo)
//  })
//  .then(mensaje=>{
//     console.log(mensaje);
//     return enviarConfirmacion(email)
//  })
//  .then(mensaje=>{
//     console.log(mensaje);
//     finalizarCompra();
//  })
//  .catch(error=>{
//     console.error(error)
//  })
 
// }
const finalizarCompra=()=>{
    console.log("Compra completada con éxito.")
}
//async/await

const realizarCompra=async (producto, saldo, email)=>{
    try {
        console.log( await verificarInventario(producto));
        console.log( await procesarPago(saldo));
        console.log( await enviarConfirmacion(email));
        finalizarCompra();
    } catch (error) {
        console.error(error);
    }
    
}

realizarCompra('camisa', 50, "pepe@gmail.com")