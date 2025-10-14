import { Request, Response } from "express";
import {
  createTutor,
  deleteTutor,
  getAllTutors,
  getOneTutor,
  updateTutor,
} from "../models/tutors.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const tutors = await getAllTutors();

      response.success(res, tutors, "Get All Tutors success");
    } catch (err) {
      response.error(res, err, "Failed to get Tutors");
    }
  },

  findOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const tutor = await getOneTutor(Number(id));

      if (tutor) {
        response.success(res, tutor, "Get Tutor by ID success");
      } else {
        response.notFound(res, "Tutor not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Tutor by ID");
    }
  },

  createTutor: async (req: Request, res: Response) => {
    try {
      const tutor = await createTutor(req.body);

      response.success(res, tutor, "Create Tutor success");
    } catch (err) {
      response.error(res, err, "Failed to create Tutor");
    }
  },

  updateTutor: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const tutor = await updateTutor(Number(id), req.body);

      response.success(res, tutor, "Update Tutor success");
    } catch (err) {
      response.error(res, err, "Failed to update Tutor");
    }
  },

  deleteTutor: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteTutor(Number(id));

      response.success(res, null, "Delete Tutor success");
    } catch (err) {
      response.error(res, err, "Failed to delete Tutor");
    }
  },
};
