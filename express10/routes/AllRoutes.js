import express from 'express';
import TeacherRoutes from './TeacherRoutes.js';

const routes = express.Router();

routes.use("/api/v1/teacher", TeacherRoutes);

export default routes;