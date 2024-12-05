import { Router } from 'express';

const router=Router(); //manejar las rutas

router.get('/cursos', (req,res)=>{
    res.send("Obteniendo cursos")
 });
 router.post('/cursos', (req,res)=>{
   res.send("Añadiendo curso")
})
router.put('/cursos', (req,res)=>{
   res.send("Actualización total de curso")
})
router.patch('/cursos', (req,res)=>{
   res.send("Actualización parcial del curso")
})
router.delete('/cursos', (req,res)=>{
   res.send("Borrado del curso")
})

//exportar las rutas

export {router as routerCursos}