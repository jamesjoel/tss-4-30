import express from 'express';

const routes = express.Router();

routes.get("/", fn1)
routes.get("/new", fn1)
routes.get("/offer", fn1)
routes.get("/discount", fn1)
routes.get("/coupon", fn1)
routes.get("/demo", fn1)

export default routes;