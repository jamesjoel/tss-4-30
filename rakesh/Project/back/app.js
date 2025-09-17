import express from 'express';
import AllRoutes from './routes/AllRoutes.js';
import { port } from './config/config.js';
import cors from 'cors'
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(AllRoutes);
// const port = 3000;
app.listen(port, ()=>{
    console.log("server Running with Port ", port);
})