"use strict"

import { Router } from 'express';
import { getCurso, getCursos,addCurso,updateCurso, updatePatchCurso, delCurso } from '../controllers/cursos.controllers.js';

const router = Router();


router.get('/cursos', getCursos);
router.get('/cursos/:id', getCurso);
router.post('/cursos', addCurso);
router.put('/cursos/:id', updateCurso);
router.patch('/cursos/:id', updatePatchCurso);
router.delete('/cursos/:id',  delCurso);

export { router as routesCursos };
