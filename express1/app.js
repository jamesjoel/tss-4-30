import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
const app = express();

app.use(AllRoutes);

const port = 3000;
app.listen(port, ()=>{
    console.log("server running with port - ", port);
})


/*

    localhost:3000/api/v1/student
    localhost:3000/api/v1/student/pass
    localhost:3000/api/v1/student/fail
    
    
    localhost:3000/api/v1/teacher/
    localhost:3000/api/v1/teacher/primary
    localhost:3000/api/v1/teacher/secondary
    localhost:3000/api/v1/teacher/sports
    localhost:3000/api/v1/teacher/heigh
    
    
    localhost:3000/api/v1/products
    localhost:3000/api/v1/products/new
    localhost:3000/api/v1/products/electronics
    localhost:3000/api/v1/products/mobiles
    localhost:3000/api/v1/products/offers

*/