import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
const app = express();


// for all routes the Express react "AllRoutes" var
app.use(AllRoutes);
const port = 3000;
app.listen(3000, ()=>{
    console.log("Server Running With Port ", port);
})