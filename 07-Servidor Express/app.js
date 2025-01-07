// Importar Express
import express from 'express';

// Crear una aplicación de Express
const app = express();

// Definir el puerto
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! Servidor de Node.js con Express funcionando.');
});

app.get('/cliente', (req, res) => {
  res.send('¡Hola,  página de cliente');
});

// Manejar rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
