import express from "express";
import materiController from "../controllers/materi.controller";

const router = express.Router();

router.get("/materis", materiController.findAll);
router.get("/materis/:id", materiController.getOnebyId);
router.post("/materis", materiController.createMateri);
router.put("/materis/:id", materiController.updateMateri);
router.delete("/materis/:id", materiController.deleteMateri);

export default router;
