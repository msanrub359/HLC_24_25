"use strict"

import { Router } from 'express';
import { getAlumnos, getAlumno, delAlumno, addAlumno, updateAlumno, getAlumnoCurso, updatePatchAlumno } from '../controllers/alumnos.controllers.js';
import { validar } from '../validators/alumnos.validators.js';
import { autenticarToken } from '../controllers/auth.controller.js';

const router = Router();


router.get('/alumnos', autenticarToken, getAlumnos);
//router.get('/alumnos/:id', getAlumno);
router.get('/alumnos/idAlumno/:id', autenticarToken, getAlumno);
router.get('/alumnos/idCurso/:idCurso', autenticarToken, getAlumnoCurso);
router.post('/alumnos', autenticarToken, validar, addAlumno);
router.put('/alumnos/:id', autenticarToken, validar, updateAlumno);
router.patch('/alumnos/:id', autenticarToken, validar, updatePatchAlumno);
router.delete('/alumnos/:id',  autenticarToken, delAlumno);

export { router as routesAlumnos };
