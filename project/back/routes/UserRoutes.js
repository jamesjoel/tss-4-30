import express from 'express';
import { SaveUser, DeleteAll, Profile, GetAllUser } from '../controllers/UserController.js';
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js';
const routes = express.Router();

routes.post("/", SaveUser);

routes.get("/deleteall", DeleteAll);

routes.get("/profile", Profile)

routes.get("/allusers", IsAdminLoggedIn, GetAllUser)

export default routes;