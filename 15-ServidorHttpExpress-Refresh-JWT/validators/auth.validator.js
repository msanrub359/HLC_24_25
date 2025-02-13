"use strict"
import {check, validationResult} from 'express-validator';

export const validarLogin= [
    check('email').exists().withMessage('El email  es obligatorio'),
    check('email').notEmpty().withMessage('El email no puede estar vacío'),
    check('email').isEmail().normalizeEmail().withMessage('Debe tener formato de email'),
   
    check('password').exists().withMessage('El password  es obligatorio'),
    check('password').notEmpty().withMessage('El password no puede estar vacío'),
    check('password').isLength({min:5, max:50}).withMessage('La longitud de password debe ser entre 5 y 50 carac.'),
    (req, res, next)=>{
        const errores= validationResult(req);
        if (!errores.isEmpty()){ //si hay hay errores
            return res.status(400).json({errors:errores.array()})
        }else{
            next(); //si no hay errores se pasa al siguiente middleware (controlador)
        }
    }
]

export const validarRegister= [
    check('username').exists().withMessage('El username  es obligatorio'),
    check('username').notEmpty().withMessage('El username no puede estar vacío'),
    check('username').isAlphanumeric().withMessage('Debe contener letras y números'),

    check('email').exists().withMessage('El email  es obligatorio'),
    check('email').notEmpty().withMessage('El email no puede estar vacío'),
    check('email').isEmail().normalizeEmail().withMessage('Debe tener formato de email'),
   
    check('password').exists().withMessage('El password  es obligatorio'),
    check('password').notEmpty().withMessage('El password no puede estar vacío'),
    check('password').isLength({min:5, max:50}).withMessage('La longitud de password debe ser entre 5 y 50 carac.'),
    (req, res, next)=>{
        const errores= validationResult(req);
        if (!errores.isEmpty()){ //si hay hay errores
            return res.status(400).json({errors:errores.array()})
        }else{
            next(); //si no hay errores se pasa al siguiente middleware (controlador)
        }
    }
]

