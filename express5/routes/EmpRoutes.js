import express from 'express';
import { Employee, EmployeePost } from '../controllers/EmpController.js';
const routes = express.Router();

routes.get("/", Employee);
// routes.get("/info", Employee)

// routes.get(["/", "/info", "/more"], Employee)





routes.post("/", EmployeePost);


export default routes;