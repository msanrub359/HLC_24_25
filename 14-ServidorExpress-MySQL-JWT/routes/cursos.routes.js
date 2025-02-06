"use strict"

import { Router } from 'express';
import { getCurso, getCursos,addCurso,updateCurso, updatePatchCurso, delCurso } from '../controllers/cursos.controllers.js';
import { validar } from '../validators/cursos.validators.js';

const router = Router();


router.get('/cursos', getCursos);
//router.get('/cursos/:id', getAlumno);
router.get('/cursos/:id', getCurso);
router.post('/cursos', validar, addCurso);
router.put('/cursos/:id', validar, updateCurso);
router.patch('/cursos/:id', validar, updatePatchCurso);
router.delete('/cursos/:id',  delCurso);

export { router as routesCursos };
