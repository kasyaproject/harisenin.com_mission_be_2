import express from "express";
import myCourseController from "../controllers/myCourse.controller";

const router = express.Router();

router.get("/my-courses", myCourseController.findAll);
router.get("/my-courses/:id", myCourseController.getCoursebyId);
router.post("/my-courses", myCourseController.createMyCourse);
router.put("/my-courses/:id", myCourseController.updateCourseDone);

export default router;
