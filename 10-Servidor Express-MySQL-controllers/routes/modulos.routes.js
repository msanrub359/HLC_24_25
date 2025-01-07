"use strict";

import { Router } from "express";

import { getModulos, getModulo, getModuloCurso, delModulo, addModulo, updateModulo, updatePatchModulo } from '../controllers/modulos.controllers.js';

const router = Router();
//responder a los endpoint. Representa una acción de la API
router.get('/modulos', getModulos);
router.get('/modulos/id/:id', getModulo);
router.get('/modulos/idCurso/:idCurso', getModuloCurso);
router.post('/modulos', addModulo);
router.put('/modulos/:id', updateModulo);
router.patch('/modulos/:id', updatePatchModulo);
router.delete('/modulos/:id',  delModulo);

export { router as routesModulos };
