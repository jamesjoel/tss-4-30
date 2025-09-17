import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use(AllRoutes);


const port = 3000;
app.listen(port, ()=>{
    console.log("Server Running With port", port);
})

/*

.use // middleware method


.get
.post
.put
.delete








    1   .use                .use(varname)           for all/any routes
    2.                      .use("/route", varname) for only "/route"
    3.                      .use(["/route1", "/route2", "/route3"], varname)
                            // "/route1", "/route2", "/route3"

*/