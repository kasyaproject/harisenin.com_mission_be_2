import express from "express";
import paymentController from "../controllers/payment.controller";

const router = express.Router();

router.get("/payments", paymentController.findAll);
router.get("/payments/:id", paymentController.getOnebyId);
router.post("/payments", paymentController.createPayment);
router.put("/payments/:id/paid", paymentController.updateStatusPaid);
router.put("/payments/:id/cancelled", paymentController.updateStatusCancelled);
router.put("/payments/:id/pending", paymentController.updateStatusPending);

export default router;
