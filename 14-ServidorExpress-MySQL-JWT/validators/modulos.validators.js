"use strict"

import {check, validationResult} from 'express-validator';

export const validar=[
    check('idModulo').exists().notEmpty().isLength({min:3, max:8}).isAlphanumeric().withMessage("El Id del módulo no puede estar vacío, debe tener entre 3 y 8 letras y/o números"),
    check('desc').notEmpty().matches(/^[A-ZÁ-ÚÑ\s]{3,50}$/).withMessage("La descripción no puede estar vacía, debe estar en mayúsculas y su longitud debe tener entre 3 y 50 caracteres"),
    check('idCurso').notEmpty().isLength({min:4, max:10}).trim().withMessage("El idCurso no puede estar vacío y debe tener entre 4 y 10 caracteres"),
    (req, res, next)=>{ //función que maneja los errores
        const errores= validationResult(req); //recoge los errores de validación de la petición al servidor
        if (!errores.isEmpty()){ //Si hay errores, se responde con el error 400
            return res.status(400).json({errors: errores.array()})
        }else{ //Si no hay errores se pasa al siguiente middleware
            next();
        }
    }
]

