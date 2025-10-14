import express from "express";
import productController from "../controllers/product.controller";

const router = express.Router();

router.get("/products", productController.findAll);
router.get("/products/:id", productController.getProductbyId);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export default router;
