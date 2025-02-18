"use strict"

import { Router } from 'express';
import { getCurso, getCursos,addCurso,updateCurso, updatePatchCurso, delCurso } from '../controllers/cursos.controllers.js';
import { validar } from '../validators/cursos.validators.js';
import { autenticarToken, autorizarRol } from '../controllers/auth.controller.js';

const router = Router();


router.get('/cursos', autenticarToken,  getCursos);
//router.get('/cursos/:id', getAlumno);
router.get('/cursos/:id', autenticarToken, getCurso);
router.post('/cursos', autenticarToken, autorizarRol(['admin', 'user']),validar, addCurso);
router.put('/cursos/:id', autenticarToken, autorizarRol(['admin', 'user']),validar, updateCurso);
router.patch('/cursos/:id', autenticarToken, autorizarRol(['admin', 'user']),validar, updatePatchCurso);
router.delete('/cursos/:id',  delCurso);

export { router as routesCursos };
