import express from 'express';
import { SaveUser, DeleteAll } from '../controllers/UserController.js';
const routes = express.Router();

routes.post("/", SaveUser);

routes.get("/deleteall", DeleteAll);

export default routes;