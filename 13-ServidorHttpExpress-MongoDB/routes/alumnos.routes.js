import { Router } from 'express';
import { getAlumnos, getAlumno, getAlumnoIdCurso, addAlumno, updatePutAlumno, delAlumno } from "../controllers/alumnos.controllers.js"

import { validar } from '../validators/alumnos.validator.js';


const router=Router(); //manejar las rutas

router.get('/alumnos', getAlumnos);
router.get('/alumnos/idAlumno/:id', getAlumno);
router.get('/alumnos/idCurso/:idCurso', getAlumnoIdCurso);

router.post('/alumnos',validar, addAlumno);
router.put('/alumnos/:id',validar, updatePutAlumno);


router.delete('/alumnos/:id', delAlumno)

//exportar las rutas

export {router as routerAlumnos}