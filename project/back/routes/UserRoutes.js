import express from 'express';
import { SaveUser, DeleteAll, Profile } from '../controllers/UserController.js';
const routes = express.Router();

routes.post("/", SaveUser);

routes.get("/deleteall", DeleteAll);

routes.get("/profile", Profile)

export default routes;