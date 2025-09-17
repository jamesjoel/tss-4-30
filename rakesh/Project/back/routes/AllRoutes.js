import express from "express";
import CityRoutes from './CityRoutes.js';
import UserRoutes from './UserRoutes.js';
import UserAuthRoutes from './UserAuthRoutes.js';
import AdminAuthRoutes from './AdminAuthRoutes.js'
const routes = express.Router();

routes.use("/api/v1/city", CityRoutes);
routes.use('/api/v1/user', UserRoutes);
routes.use('/api/v1/userauth', UserAuthRoutes);
routes.use('/api/v1/adminauth', AdminAuthRoutes);
export default routes;
