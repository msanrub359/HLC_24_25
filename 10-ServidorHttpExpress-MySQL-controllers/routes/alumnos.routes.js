import { Router } from 'express';
import { getAlumnos, getAlumno, addAlumno,delAlumno } from "../controllers/alumnos.controllers.js"

const router=Router(); //manejar las rutas

router.get('/alumnos', getAlumnos);
router.get('/alumnos/:id', getAlumno);

 router.post('/alumnos', addAlumno);
router.put('/alumnos', (req,res)=>{
   res.send("Actualización total de alumno")
})
router.patch('/alumnos', (req,res)=>{
   res.send("Actualización parcial del alumno")
})
router.delete('/alumnos/:id', delAlumno)

//exportar las rutas

export {router as routerAlumnos}