import express from 'express';
import EmpRoutes from './EmployeeRoutes.js'
import ProRoutes from './ProductRoutes.js'

const routes = express.Router();
// for ":3000/api/v1/employee" routes, read "EmpRoutes" var
routes.use("/api/v1/employee", EmpRoutes);


// for ":3000/api/v1/product" routes, read "ProRoutes" var
routes.use("/api/v1/product", ProRoutes);
// app.use(AllRoutes);



export default routes;


/*
    :3000/api/v1/product
    :3000/api/v1/product/latest
    :3000/api/v1/product/latest/offer
    :3000/api/v1/product/latest/new
    :3000/api/v1/product/latest/discount
    :3000/api/v1/product/latest/coupon
    :3000/api/v1/product/latest/demo
    
    :3000/api/v1/product/latest/offer/hello1
    :3000/api/v1/product/latest/offer/hello2
    :3000/api/v1/product/latest/offer/hello3
    :3000/api/v1/product/latest/offer/hello4




*/
