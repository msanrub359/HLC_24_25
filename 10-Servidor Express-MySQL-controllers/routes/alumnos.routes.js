"use strict"

import { Router } from 'express';
import {pool} from '../db.js'
import { getAlumnos, getAlumno, delAlumno, addAlumno, updateAlumno, getAlumnoCurso, updatePatchAlumno } from '../controllers/alumnos.controllers.js';

const router = Router();


// Usar el prefijo directamente dentro del archivo
// router.get('/alumnos', async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM alumnos');
//         res.status(200).json(rows);
//     } catch (error) {
//         res.status(500).json({ message: 'Error al obtener alumnos', error: error.message });
//     }
// });
router.get('/alumnos', getAlumnos);
//router.get('/alumnos/:id', getAlumno);
router.get('/alumnos/idAlumno/:id', getAlumno);
router.get('/alumnos/idCurso/:idCurso', getAlumnoCurso);
router.post('/alumnos', addAlumno);
router.put('/alumnos/:id', updateAlumno);
router.patch('/alumnos/:id', updatePatchAlumno);
router.delete('/alumnos/:id',  delAlumno);

export { router as routesAlumnos };
