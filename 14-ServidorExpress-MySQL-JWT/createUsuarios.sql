-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
    username VARCHAR(50) UNIQUE NOT NULL, -- Nombre de usuario único
    password VARCHAR(255) NOT NULL, -- Contraseña cifrada
    email VARCHAR(50) UNIQUE NOT NULL -- Email único
   
);

-- Insertar usuarios de ejemplo
INSERT INTO usuarios (username, password, email) 
VALUES 
('admin', '$2a$10$kXGM4je5yUvPo2dCVVVJuuNMZE9DkhxuXfOiqvZHD8V6uxIuC2STS', 'admin@example.com'), -- Contraseña: "123456"
('usuario1', '$2a$10$Ck2JQw0IOrftdYZgpBUIYOT8vIJggO/I.605DzL0aA4mjhldZiSUu', 'usuario1@example.com'), -- Contraseña: "password1"
('usuario2', '$2a$10$U2FjExKVqajSsgm8HT6uLuho0zU.QLZl3br/1F2rzlyGGtBHmTE7a', 'usuario2@example.com'); -- Contraseña: "password2"
