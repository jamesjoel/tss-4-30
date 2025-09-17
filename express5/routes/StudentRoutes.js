import express from 'express'
import { GetAllStudent, SaveStudent, UpdateStuById, GetStuById, DeleteStubyId } from '../controllers/StudentController.js';

const routes = express.Router();

routes.get("/", GetAllStudent);
routes.get("/:a", GetStuById)
routes.post("/", SaveStudent);
routes.delete("/:a", DeleteStubyId)
routes.put("/:id", UpdateStuById)


export default routes;