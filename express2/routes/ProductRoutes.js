import express from 'express';
import ProLastestRoutes from './ProductLastestRoutes.js'
import { LastestProduct, Product } from '../controllers/ProductController.js';

const rouets = express.Router();

rouets.get("/", Product)
rouets.get("/latest", LastestProduct)

// :3000/api/vi/product/latest

export default rouets;