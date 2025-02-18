import { Router } from 'express';

import { login, refreshToken, register } from '../controllers/auth.controllers.js';
import { validarLogin, validarRegister } from '../validators/auth.validator.js';

//import { validar } from '../validators/alumnos.validator.js';



const router=Router(); //manejar las rutas

router.post('/login',validarLogin, login);
router.post('/register', validarRegister, register);
router.get('/refresh-token',  refreshToken);


export {router as routerAuth}