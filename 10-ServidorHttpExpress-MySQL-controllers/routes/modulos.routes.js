import { Router } from 'express';

const router=Router(); //manejar las rutas

router.get('/modulos', (req,res)=>{
    res.send("Obteniendo modulo")
 });
 router.post('/modulos', (req,res)=>{
   res.send("Añadiendo modulo")
})
router.put('/modulos', (req,res)=>{
   res.send("Actualización total de modulo")
})
router.patch('/modulos', (req,res)=>{
   res.send("Actualización parcial del modulo")
})
router.delete('/modulos', (req,res)=>{
   res.send("Borrado del modulo")
})

//exportar las rutas

export {router as routerModulos}