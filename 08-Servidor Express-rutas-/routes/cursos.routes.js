"use strict"

import { Router } from 'express';

const router = Router();

// Usar el prefijo directamente dentro del archivo
router.get('/cursos',  (req, res) => {
    res.send('Obteniendo cursos' );
});

router.post('/cursos', (req, res) => {
    res.send('Creando un curso' );
});

router.put('/cursos',  (req, res) => {
    res.send('Actualizando todos los cursos');
});

router.patch('/cursos',  (req, res) => {
    res.send('Actualizando parcialmente un alumno');
});

router.delete('/cursos',  (req, res) => {
    res.send('Borrando un alumno' );
});

export { router as routesCursos };
