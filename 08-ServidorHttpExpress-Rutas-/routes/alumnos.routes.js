import { Router } from 'express';

const router=Router(); //manejar las rutas

router.get('/alumnos', (req,res)=>{
    res.send("Obteniendo alumnos")
 });
 router.post('/alumnos', (req,res)=>{
   res.send("Añadiendo alumno")
})
router.put('/alumnos', (req,res)=>{
   res.send("Actualización total de alumno")
})
router.patch('/alumnos', (req,res)=>{
   res.send("Actualización parcial del alumno")
})
router.delete('/alumnos', (req,res)=>{
   res.send("Borrado del aluumno")
})

//exportar las rutas

export {router as routerAlumnos}