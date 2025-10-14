import express from "express";
import modul_materiController from "../controllers/modul_materi.controller";

const router = express.Router();

router.post("/modul-materi", modul_materiController.createModulMateri);
router.delete(
  "/modul-materi/:id",
  modul_materiController.removeMateriFromModul
);

export default router;
