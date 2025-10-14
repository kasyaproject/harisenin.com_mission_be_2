import { Request, Response } from "express";
import {
  createPretest,
  deletePretest,
  getAllPretests,
  getOnePretest,
  updatePretest,
} from "../models/pretest.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const pretest = await getAllPretests();

      response.success(res, pretest, "Get All Pretest success");
    } catch (err) {
      response.error(res, err, "Failed to get Pretest");
    }
  },

  getPretestById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const pretest = await getOnePretest(Number(id));

      if (pretest) {
        response.success(res, pretest, "Get Pretest by ID success");
      } else {
        response.notFound(res, "Pretest not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Pretest by ID");
    }
  },

  createPretest: async (req: Request, res: Response) => {
    try {
      const pretest = await createPretest(req.body);

      response.success(res, pretest, "Create Pretest success");
    } catch (err) {
      response.error(res, err, "Failed to create Pretest");
    }
  },

  updatePretest: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const pretest = await updatePretest(Number(id), req.body);

      response.success(res, pretest, "Update Pretest success");
    } catch (err) {
      response.error(res, err, "Failed to update Pretest");
    }
  },

  deletePretest: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deletePretest(Number(id));

      response.success(res, null, "Delete Pretest success");
    } catch (err) {
      response.error(res, err, "Failed to delete Pretest");
    }
  },
};
