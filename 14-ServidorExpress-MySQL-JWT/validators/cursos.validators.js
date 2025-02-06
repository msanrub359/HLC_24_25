"use strict"

import {check, validationResult} from 'express-validator';

export const validar=[
    check('desc').exists().withMessage("Falta la descripción"),
    check('desc').notEmpty().withMessage("La descripción no puede estar vacía"),
    check('desc').isLength({min:1, max:50}).withMessage("La descripción debe tener entre 1 y 50 caracteres"),
    check('desc').isAlphanumeric().withMessage("La descripción solo debe contener letras y números"),
    (req, res, next)=>{ //función que maneja los errores
        const errores= validationResult(req); //recoge los errores de validación de la petición al servidor
        if (!errores.isEmpty()){ //Si hay errores, se responde con el error 400
            return res.status(400).json({errors: errores.array()})
        }else{ //Si no hay errores se pasa al siguiente middleware
            next();
        }
    }
]

