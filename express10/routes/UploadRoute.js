import express from 'express'
import {Upload} from '../controllers/UploadController.js' 
let routes = express.Router()

routes.post("/", Upload);

export default routes;