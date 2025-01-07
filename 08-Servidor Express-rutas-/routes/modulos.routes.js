"use strict"

import { Router } from 'express'

const router = Router();
//responder a los endpoint. Representa una acción de la API
router.get("/modulos", (req, res)=>{
    res.send("Obteniendo modulos")
  });
  router.post("/modulos", (req, res)=>{
    res.send("Creando modulos")
  })
  router.put("/modulos", (req, res)=>{
    res.send("Actualización total modulos")
  })
  router.patch("/modulos", (req, res)=>{
    res.send("Actualización parcial modulos")
  })
  router.delete("/modulos", (req, res)=>{
    res.send("Borrando modulos")
  })

export {router as routesModulos}