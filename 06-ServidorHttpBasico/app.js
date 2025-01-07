// Importar el módulo HTTP de Node.js
import http from 'https';

// Definir el puerto en el que se ejecutará el servidor
const PORT = 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
       
    // Verificar la ruta de la solicitud
    if (req.url === '/') {
        res.end('¡Hola, mundo! Servidor de Node.js funcionando.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

// Iniciar el servidor y escuchar en el puerto definido
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
