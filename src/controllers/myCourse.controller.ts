import { Request, Response } from "express";
import {
  createCourse,
  getAllCourses,
  getOneCourse,
  updateCourseDone,
} from "../models/myCourses.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const myCourse = await getAllCourses();

      response.success(res, myCourse, "Get All My Course success");
    } catch (err) {
      response.error(res, err, "Failed to get My Course");
    }
  },

  getCoursebyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const course = await getOneCourse(Number(id));

      if (course) {
        response.success(res, course, "Get Course by ID success");
      } else {
        response.notFound(res, "Course not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Course by ID");
    }
  },

  createMyCourse: async (req: Request, res: Response) => {
    try {
      const myCourse = await createCourse(req.body);

      response.success(res, myCourse, "Create My Course success");
    } catch (err) {
      response.error(res, err, "Failed to create My Course");
    }
  },

  updateCourseDone: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const myCourse = await updateCourseDone(Number(id));

      response.success(res, myCourse, "Update My Course status success");
    } catch (err) {
      response.error(res, err, "Failed to update My Course status");
    }
  },
};
