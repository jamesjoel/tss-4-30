import express from 'express';
import EmpRoutes from './EmpRoutes.js'
import StudentRoutes from './StudentRoutes.js'
const routes = express.Router();


routes.use("/api/v1/employee", EmpRoutes);
routes.use("/api/v1/student", StudentRoutes)
// routes.use("/api/v1/user", EmpRoutes);


export default routes;