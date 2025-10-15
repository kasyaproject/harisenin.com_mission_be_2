import express from "express";
import modul_productController from "../controllers/modul_product.controller";

const router = express.Router();

router.get("/modul-products/:id", modul_productController.getModulbyProduct);
router.post("/modul-products", modul_productController.addModulProduct);
router.delete(
  "/modul-products/:id",
  modul_productController.removeModulProduct
);

export default router;
