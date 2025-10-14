import express from "express";
import tutorController from "../controllers/tutor.controller";

const router = express.Router();

router.get("/tutors", tutorController.findAll);
router.get("/tutors/:id", tutorController.findOne);
router.post("/tutors", tutorController.createTutor);
router.put("/tutors/:id", tutorController.updateTutor);
router.delete("/tutors/:id", tutorController.deleteTutor);

export default router;
