import express from "express";
import reviewController from "../controllers/review.controller";

const router = express.Router();

router.get("/reviews", reviewController.findAll);
router.get("/reviews/:id", reviewController.getOnebyId);
router.post("/reviews", reviewController.createReview);
router.put("/reviews/:id", reviewController.updateReview);
router.delete("/reviews/:id", reviewController.deleteReview);

export default router;
