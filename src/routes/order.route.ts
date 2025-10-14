import express from "express";
import orderController from "../controllers/order.controller";

const router = express.Router();

router.get("/orders", orderController.findAll);
router.get("/orders/:id", orderController.getOrderbyId);
router.get("/orders/:id/user", orderController.getOrderbyUser);
router.post("/orders", orderController.createOrder);

export default router;
