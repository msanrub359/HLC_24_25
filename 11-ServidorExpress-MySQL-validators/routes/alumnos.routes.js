"use strict"

import { Router } from 'express';
import {pool} from '../db.js'
import { getAlumnos, getAlumno, delAlumno, addAlumno, updateAlumno, getAlumnoCurso, updatePatchAlumno } from '../controllers/alumnos.controllers.js';
import { validar } from '../validators/alumnos.validators.js';

const router = Router();


router.get('/alumnos', getAlumnos);
//router.get('/alumnos/:id', getAlumno);
router.get('/alumnos/idAlumno/:id', getAlumno);
router.get('/alumnos/idCurso/:idCurso', getAlumnoCurso);
router.post('/alumnos', validar, addAlumno);
router.put('/alumnos/:id', validar, updateAlumno);
router.patch('/alumnos/:id', validar, updatePatchAlumno);
router.delete('/alumnos/:id',  delAlumno);

export { router as routesAlumnos };
