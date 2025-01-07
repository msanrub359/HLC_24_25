"use strict"

import { Router } from 'express';
import {pool} from '../db.js'
const router = Router();


// Usar el prefijo directamente dentro del archivo
router.get('/cursos',  async(req, res) => {
    res.send('Mostrando todos los cursos' );
});

router.post('/cursos', (req, res) => {
    res.send('Creando un curso' );
});

router.put('/cursos',  (req, res) => {
    res.send('Actualizando todos los cursos');
});

router.patch('/cursos',  (req, res) => {
    res.send('Actualizando parcialmente un curso');
});

router.delete('/cursos',  (req, res) => {
    res.send('Borrando un curso' );
});

export { router as routesCursos };
