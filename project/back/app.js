import express from 'express'
import { PORT } from './config/config.js'
import AllRoutes from './routes/AllRoutes.js'
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(AllRoutes);

app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT);
})