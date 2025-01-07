import express from 'express';
import cors from 'cors';

import { routesAlumnos } from './routes/alumnos.routes.js';
import { routesModulos } from './routes/modulos.routes.js';
import { routesCursos } from './routes/cursos.routes.js';
import { routesCalificaciones } from './routes/calificaciones.routes.js';
import { PORT } from './config.js';


const app = express();
//Configurar puerto
//const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());
//Middleware para manejar las CORS
app.use (cors())

// Usar las rutas directas); // No necesitas añadir un prefijo aquí
app.use(routesAlumnos);
app.use(routesModulos);
app.use(routesCursos);
app.use(routesCalificaciones)

// Manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ message: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
