"use strict";
import { getCalificaciones, getCalificacion, getCursoCalificacion, addCalificacion, updateCalificacion,updatePatchCalificacion, delCalificacion } from "../controllers/calificaciones.controllers.js";

import { Router } from "express";
import { validar } from "../validators/calificaciones.validators.js";


const router = Router();

router.get('/calificaciones', getCalificaciones);
router.get('/calificaciones/id/:id', getCalificacion);
router.get('/calificaciones/idCurso/:id', getCursoCalificacion);
router.post('/calificaciones', validar, addCalificacion);
router.put('/calificaciones/:id', validar, updateCalificacion);
router.patch('/calificaciones/:id', validar, updatePatchCalificacion);
router.delete('/calificaciones/:id',  delCalificacion);

export { router as routesCalificaciones };
