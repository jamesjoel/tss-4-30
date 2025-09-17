import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
import { PORT } from './config/config.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(AllRoutes);

app.listen(PORT, ()=>console.log("Server Running With Port ", PORT));

