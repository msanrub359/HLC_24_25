"use strict";

import { Router } from "express";
import { pool } from "../db.js";

const router = Router();
//responder a los endpoint. Representa una acción de la API
router.get("/modulos", async (req, res) => {
  res.send("Mostrando todos los módulos");
});

// Ruta para obtener los módulos por 'idModulo'
router.get('/modulos/:idCurso', async (req, res) => {
  res.send("Mostrar solo un curso");
});

router.post("/modulos", (req, res) => {
  res.send("Creando modulos");
});
router.put("/modulos", (req, res) => {
  res.send("Actualización total modulos");
});
router.patch("/modulos", (req, res) => {
  res.send("Actualización parcial modulos");
});
router.delete("/modulos", (req, res) => {
  res.send("Borrando modulos");
});

export { router as routesModulos };
