import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { pool } from "../db.js";

import { SECRET_KEY, REFRESH_SECRET_KEY } from "../config.js";

// Controlador de inicio de sesión
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [result] = await pool.query(
      "SELECT * FROM usuarios where email=?",
      [email]
    );
    // Validar el email
    
    if (result.length ==0 || email !== result[0].email) {
     
      return res
        .status(401)
        .json({ message: "email o contraseña incorrectas" });
    }
   
    // Verificar la contraseña, comparar con bcrypt
    const validPass = await bcrypt.compare(password, result[0].password);
    
    if (!validPass) {
      //no es correcta la contraseña
      return res
        .status(401)
        .json({ message: "email o contraseña incorrectos" });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: result[0].id, createdAt: new Date().toISOString() },
      SECRET_KEY,
      {
        expiresIn: "1h", // Token expira en 1 hora
      }
    );
    
    // Generar refresh token (7 días)
    const refreshToken = jwt.sign({ id: result[0].id, createdAt: new Date().toISOString() }, REFRESH_SECRET_KEY, { expiresIn: "7d" });

    // Guardar refresh token en una cookie HTTP-only

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,  // La cookie solo es accesible por el servidor (no por JavaScript en el frontend).
      secure: true,    // Solo se envía en HTTPS (en producción).
      sameSite: "Strict" // Evita envío en solicitudes de otros sitios (protección CSRF).
    });
    
    res.status(200).json({ token }); //enviar token
  } catch (error) {
    res.status(500).json({ message: "Error en el login" });
  }
};

export const addUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const [isUser] = await pool.query(
      "SELECT * FROM usuarios WHERE email = ? ",
      [email]
    );
    if (isUser.length > 0) {
      return res.status(400).json({ message: "El email ya existe" });
    }

    // Generar el hash de la contraseña
    const rounds = 10; // Número de rondas para el algoritmo bcrypt
    const hashedPassword = await bcrypt.hash(password, rounds);

    // Insertar el usuario en la base de datos
    const [result] = await pool.query(
      "INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)",
      [username, hashedPassword, email]
    );

    // Responder con éxito
    res.status(201).json({
      message: "Usuario creado exitosamente",
      userId: result.insertId, // ID del usuario recién creado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

// Middleware para proteger rutas
export const autenticarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader){
    return res.status(403).json({ message: "Token no proporcionado" });
  }

  const token =  authHeader.split(" ")[1];
 

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token no válido" });
    }
    
    req.user = user; // Agrega los datos del usuario al objeto req
    next();
  });
};

// Endpoint para renovar el Access Token usando el Refresh Token
export const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken; // El refresh token viene en la cookie HTTP-only

  // Validar que se envió el refresh token
  if (!refreshToken) {
    return res.status(401).json({ message: "No hay refresh token, inicie sesión nuevamente" });
  }
  try {
    // Verificar y decodificar el refresh token
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    // Generar un nuevo access token
    const nuevoAccessToken = jwt.sign(
      {id: result[0].id, createdAt: new Date().toISOString() },
      SECRET_KEY,
      { expiresIn: "1h" } // Expira en 1 hora
    );

    res.status(200).json({ accessToken: nuevoAccessToken });
  } catch (error) {
   
    res.status(403).json({ message: "Refresh token inválido o expirado" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logout exitoso" });
};

