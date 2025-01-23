import { Router } from 'express';

const router=Router(); //manejar las rutas

router.get('/calificaciones', (req,res)=>{
    res.send("Obteniendo modulo")
 });
 router.post('/calificaciones', (req,res)=>{
   res.send("Añadiendo modulo")
})
router.put('/calificaciones', (req,res)=>{
   res.send("Actualización total de modulo")
})
router.patch('/calificaciones', (req,res)=>{
   res.send("Actualización parcial del modulo")
})
router.delete('/calificaciones', (req,res)=>{
   res.send("Borrado del modulo")
})

//exportar las rutas

export {router as routerCalificaciones}