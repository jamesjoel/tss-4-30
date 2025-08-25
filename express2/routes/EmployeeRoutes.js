import express from 'express';
import {Employee, EmployeeNew, EmployeeOld} from '../controllers/EmployeeController.js'

const routes = express.Router();

routes.get("/", Employee)
routes.get("/old", EmployeeOld)
routes.get("/new", EmployeeNew)

export default routes;