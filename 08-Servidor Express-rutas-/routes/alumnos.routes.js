"use strict"

import { Router } from 'express';

const router = Router();

// Usar el prefijo directamente dentro del archivo
router.get('/alumnos',  (req, res) => {
    res.send('Obteniendo alumnos' );
});

router.post('/alumnos', (req, res) => {
    res.send('Creando un alumno' );
});

router.put('/alumnos',  (req, res) => {
    res.send('Actualizando todos los alumnos');
});

router.patch('/alumnos',  (req, res) => {
    res.send('Actualizando parcialmente un alumno');
});

router.delete('/alumnos',  (req, res) => {
    res.send('Borrando un alumno' );
});

export { router as routesAlumnos };
