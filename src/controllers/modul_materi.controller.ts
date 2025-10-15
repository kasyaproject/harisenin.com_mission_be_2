import { Request, Response } from "express";
import {
  addMateriToModul,
  getMateriByModul,
  removeMateriFromModul,
} from "../models/modul_materis.model";
import response from "../utils/response";

export default {
  getMateriByModul: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const materi = await getMateriByModul(Number(id));

      response.success(res, materi, "Get Materi by ID success");
    } catch (err) {
      response.error(res, err, "Failed to get Materi by ID");
    }
  },

  createModulMateri: async (req: Request, res: Response) => {
    try {
      const materi = await addMateriToModul(req.body);

      response.success(res, materi, "Create Materi success");
    } catch (err) {
      response.error(res, err, "Failed to create Materi");
    }
  },

  removeMateriFromModul: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeMateriFromModul(Number(id), req.body);

      response.success(res, null, "Delete Materi success");
    } catch (err) {
      response.error(res, err, "Failed to delete Materi");
    }
  },
};
