import express from "express";
import product_reviewsController from "../controllers/product_reviews.controller";

const router = express.Router();

router.get(
  "/product-reviews/:id",
  product_reviewsController.getReviewsbyProduct
);
router.post("/product-reviews", product_reviewsController.addReviewProduct);
router.delete(
  "/product-reviews/:id",
  product_reviewsController.removeReviewFromProduct
);

export default router;
