import express from 'express';
import { GetAllTeacher, GetByIdTeacher, SaveTeacher, DeleteByIdTeacher, UpdateByIdTeacher } from '../controllers/TeacherController.js'

const routes = express.Router();

routes.get("/", GetAllTeacher)
routes.get("/:id", GetByIdTeacher)
routes.post("/", SaveTeacher)
routes.put("/:id", UpdateByIdTeacher)
routes.delete("/:id", DeleteByIdTeacher)

export default routes;