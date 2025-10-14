import { Request, Response } from "express";
import {
  createReview,
  getAllReviews,
  getOneReview,
  removeReview,
  updateReview,
} from "../models/reviews.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const reviews = await getAllReviews();

      response.success(res, reviews, "Get All Reviews success");
    } catch (err) {
      response.error(res, err, "Failed to get Reviews");
    }
  },

  getOnebyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const review = await getOneReview(Number(id));

      if (review) {
        response.success(res, review, "Get Review by ID success");
      } else {
        response.notFound(res, "Review not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Review by ID");
    }
  },

  createReview: async (req: Request, res: Response) => {
    try {
      const review = await createReview(req.body);

      response.success(res, review, "Create Review success");
    } catch (err) {
      response.error(res, err, "Failed to create Review");
    }
  },

  updateReview: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const review = await updateReview(Number(id), req.body);

      response.success(res, review, "Update Review success");
    } catch (err) {
      response.error(res, err, "Failed to update Review");
    }
  },

  deleteReview: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeReview(Number(id));

      response.success(res, null, "Delete Review success");
    } catch (err) {
      response.error(res, err, "Failed to delete Review");
    }
  },
};
