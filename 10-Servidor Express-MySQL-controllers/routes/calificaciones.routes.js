"use strict";
import { getCalificaciones, getCalificacion, getCursoCalificacion, addCalificacion, updateCalificacion,updatePatchCalificacion, delCalificacion } from "../controllers/calificaciones.controllers.js";

import { Router } from "express";


const router = Router();

router.get('/calificaciones', getCalificaciones);
router.get('/calificaciones/id/:id', getCalificacion);
router.get('/calificaciones/idCurso/:id', getCursoCalificacion);
router.post('/calificaciones', addCalificacion);
router.put('/calificaciones/:id', updateCalificacion);
router.patch('/calificaciones/:id', updatePatchCalificacion);
router.delete('/calificaciones/:id',  delCalificacion);

export { router as routesCalificaciones };
