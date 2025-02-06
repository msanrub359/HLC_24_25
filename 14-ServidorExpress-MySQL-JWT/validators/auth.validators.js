"use strict"

import {check, validationResult} from 'express-validator';

export const validarLogin=[
    check('email').exists().withMessage("El email debe exitir"),
    check("email").notEmpty().withMessage("El email no puede estar vacía"),
    check("email").isEmail().normalizeEmail().withMessage("Debe tener formato de email"),

    check('password').exists().withMessage("La contraseña debe exitir"),
    check("password").notEmpty().withMessage("La contraeña no puede estar vacía"),
    check("password").isLength({min:5, max:30}).withMessage("La contraseña debe contener min 5 carac. y max 30 carac."),
    
    (req, res, next)=>{ //función que maneja los errores
        const errores= validationResult(req); //recoge los errores de validación de la petición al servidor
        if (!errores.isEmpty()){ //Si hay errores, se responde con el error 400
            return res.status(400).json({errors: errores.array()})
        }else{ //Si no hay errores se pasa al siguiente middleware
            next();
        }
    }
];

export const validarRegister=[
    check('username').exists().withMessage("El usuario debe existir"),
    check("username").notEmpty().withMessage("El usuario no puede estar vacío"),
    check("username").isAlphanumeric().withMessage("El formato del usuario es incorrecto"),
    check('password').exists().withMessage("La contraseña debe exitir"),
    check("password").notEmpty().withMessage("La contraeña no puede estar vacía"),
    check("password").isLength({min:5, max:30}).withMessage("La contraseña debe contener min 5 carac. y max 30 carac."),
    check('email').exists().withMessage("El email debe exitir"),
    check("email").notEmpty().withMessage("El email no puede estar vacía"),
    check("email").isEmail().normalizeEmail().withMessage("Debe tener formato de email"),
    (req, res, next)=>{ //función que maneja los errores
        const errores= validationResult(req); //recoge los errores de validación de la petición al servidor
        if (!errores.isEmpty()){ //Si hay errores, se responde con el error 400
            return res.status(400).json({errors: errores.array()})
        }else{ //Si no hay errores se pasa al siguiente middleware
            next();
        }
    }
]

