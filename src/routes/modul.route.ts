import express from "express";
import modulsController from "../controllers/moduls.controller";

const router = express.Router();

router.get("/moduls", modulsController.findAll);
router.get("/moduls/:id", modulsController.getOnebyId);
router.post("/moduls", modulsController.createModul);
router.put("/moduls/:id", modulsController.updateModul);
router.delete("/moduls/:id", modulsController.deleteModul);

export default router;
