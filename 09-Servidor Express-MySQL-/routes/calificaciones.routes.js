"use strict";

import { Router } from "express";
import { pool } from "../db.js";

const router = Router();
//responder a los endpoint. Representa una acción de la API
router.get("/calificaciones", async (req, res) => {
  res.send("Mostrar todas las calificaciones");
});


router.post("/calificaciones", (req, res) => {
  res.send("Creando calificación");
});
router.put("/calificaciones", (req, res) => {
  res.send("Actualización total calificación");
});
router.patch("/calificaciones", (req, res) => {
  res.send("Actualización parcial calificación");
});
router.delete("/calificaciones", (req, res) => {
  res.send("Borrando calificación");
});

export { router as routesCalificaciones };
