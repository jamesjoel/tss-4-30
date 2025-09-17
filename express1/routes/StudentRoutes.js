import express from 'express';
import {Student, StudentFail, StudentPass} from '../controllers/StudentController.js'
// let demo = require("../controllers/StudentController");
const routes = express.Router();


routes.get("/", Student)
routes.get("/pass", StudentPass)
routes.get("/fail",StudentFail)

export default routes;
