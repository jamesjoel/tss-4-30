import express from 'express';
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js';
import {SaveProduct, GetAllProduct, GetByIdProduct, UpdateProduct, DeleteProduct, DeleteAll} from '../controllers/ProductController.js'

const routes = express.Router();

routes.get("/", GetAllProduct)
routes.get("/deleteall", DeleteAll)
routes.get("/:id", GetByIdProduct)

routes.post("/", IsAdminLoggedIn, SaveProduct)
routes.put("/:id", IsAdminLoggedIn, UpdateProduct)
routes.delete("/:id", IsAdminLoggedIn, DeleteProduct)



/*
    localhost:3000/api/v1/category ---- ReST API category
    but, when you use
    .post
    .put
    .delete
    you have to send "token" in authorization


*/

export default routes;