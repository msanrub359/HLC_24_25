import { Router } from 'express';
import { getAlumnos, getAlumno, getAlumnoIdCurso, addAlumno, updatePutAlumno, updatePatchAlumno, delAlumno } from "../controllers/alumnos.controllers.js"

import { validar } from '../validators/alumnos.validator.js';
import { autenticarToken } from '../controllers/auth.controllers.js';


const router=Router(); //manejar las rutas

router.get('/alumnos', autenticarToken, getAlumnos);
router.get('/alumnos/idAlumno/:id', autenticarToken, getAlumno);
router.get('/alumnos/idCurso/:idCurso',autenticarToken,   getAlumnoIdCurso);

router.post('/alumnos',autenticarToken,validar, addAlumno);
router.put('/alumnos/:id',autenticarToken,validar, updatePutAlumno);

router.patch('/alumnos/:id',autenticarToken,validar, updatePatchAlumno);
router.delete('/alumnos/:id', autenticarToken,delAlumno)

//exportar las rutas

export {router as routerAlumnos}