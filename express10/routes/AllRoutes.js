import express from 'express';
import TeacherRoutes from './TeacherRoutes.js';
import UploadRoutes from './UploadRoute.js'
const routes = express.Router();

routes.use("/api/v1/teacher", TeacherRoutes);
routes.use("/api/v1/upload", UploadRoutes);

export default routes;