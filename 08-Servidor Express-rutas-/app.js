import express from 'express';
import { routesAlumnos } from './routes/alumnos.routes.js';
import { routesModulos } from './routes/modulos.routes.js';
import { routesCursos } from './routes/cursos.routes.js';

const app = express();
//Configurar puerto
const PORT = 3000;


// Usar las rutas directas); // No necesitas añadir un prefijo aquí
app.use(routesAlumnos);
app.use(routesModulos);
app.use(routesCursos);

// Manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ message: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
