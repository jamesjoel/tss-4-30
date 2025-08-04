import express from 'express';
import StudentRoutes from './StudentRoutes.js'
import TeacherRoutes from './TeacherRoutes.js'
const routes = express.Router();

routes.use("/api/v1/student", StudentRoutes);
routes.use("/api/v1/teacher", TeacherRoutes);

export default routes;

