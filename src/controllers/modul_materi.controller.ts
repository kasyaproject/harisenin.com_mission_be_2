import { Request, Response } from "express";
import {
  addMateriToModul,
  getMateriByModul,
  removeMateriFromModul,
} from "../models/modul_materi.model";
import response from "../utils/response";

export default {
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
