import express from "express";
import product_categoriesController from "../controllers/product_categories.controller";

const router = express.Router();

router.get(
  "/product-categories/:id",
  product_categoriesController.getCategorybyProduct
);
router.post(
  "/product-categories",
  product_categoriesController.addCategoryProduct
);
router.delete(
  "/product-categories/:id",
  product_categoriesController.removeCategoryFromProduct
);

export default router;
