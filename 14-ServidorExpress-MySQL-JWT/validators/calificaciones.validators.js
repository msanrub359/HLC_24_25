"use strict"

import {check, validationResult} from 'express-validator';

export const validar=[
    check('idCurso').notEmpty().isLength({min:4, max:10}).trim().withMessage("El Id del curso no puede estar vacío, debe tener entre 4 y 10 carac."),
    check('idModulo').exists().notEmpty().isLength({min:3,max:8}).isAlphanumeric().withMessage("El idModulo debe existir,  no puede estar vacío, debe contener letras y/o números y su longitud debe tener entre 3 y 8 caracteres"),
    check('idAlumno').notEmpty().isNumeric().withMessage("El id del Alumno no puede estar vacío y solo debe contener números"),
    check('calificacion').notEmpty().matches(/^(SOB|NOT|B|SUF|INS|NE)$/i).withMessage("La calificación no debe estar vacía y debe ser SOB, NOT, B, SUF o INS"),
    (req, res, next)=>{ //función que maneja los errores
        const errores= validationResult(req); //recoge los errores de validación de la petición al servidor
        if (!errores.isEmpty()){ //Si hay errores, se responde con el error 400
            return res.status(400).json({errors: errores.array()})
        }else{ //Si no hay errores se pasa al siguiente middleware
            next();
        }
    }
]

