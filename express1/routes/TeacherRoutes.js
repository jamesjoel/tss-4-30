import express from 'express';
import {Teacher, TeacherPrimary, TeacherSecondary, TeacherSports} from '../controllers/TeacherController.js'

const routes = express.Router();

routes.get("/", Teacher)
routes.get("/primary", TeacherPrimary)
routes.get("/secondary", TeacherSecondary)
routes.get("/sports", TeacherSports)



export default routes;