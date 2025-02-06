import express from 'express';
import { login, addUser } from '../controllers/auth.controller.js';
import { validarLogin, validarRegister, refreshToken } from '../validators/auth.validators.js';


 const router = express.Router();

router.post('/login', validarLogin, login);
router.post('/register', validarRegister, addUser);
router.get('/refresh-token', refreshToken)

export { router as routesAuth };

