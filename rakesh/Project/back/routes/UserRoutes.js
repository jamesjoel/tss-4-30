import express from 'express';
import { SaveUser, DeleteAll, Profie } from '../controllers/UserController.js';

const routes = express.Router();

routes.post('/', SaveUser);
routes.get('/deleteall', DeleteAll)
routes.get('/profile', Profie)
export default routes;