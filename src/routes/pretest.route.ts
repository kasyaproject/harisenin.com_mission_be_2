import express from "express";
import pretestController from "../controllers/pretest.controller";

const router = express.Router();

router.get("/pretests", pretestController.findAll);
router.get("/pretests/:id", pretestController.getPretestById);
router.post("/pretests", pretestController.createPretest);
router.put("/pretests/:id", pretestController.updatePretest);
router.delete("/pretests/:id", pretestController.deletePretest);

export default router;
