"use strict";

import { Router } from "express";

import { getModulos, getModulo, getModuloCurso, delModulo, addModulo, updateModulo, updatePatchModulo } from '../controllers/modulos.controllers.js';
import { validar } from "../validators/modulos.validators.js";

const router = Router();
//responder a los endpoint. Representa una acción de la API
router.get('/modulos', getModulos);
router.get('/modulos/id/:id', getModulo);
router.get('/modulos/idCurso/:idCurso', getModuloCurso);
router.post('/modulos', validar, addModulo);
router.put('/modulos/:id', validar, updateModulo);
router.patch('/modulos/:id', validar, updatePatchModulo);
router.delete('/modulos/:id',  delModulo);

export { router as routesModulos };
