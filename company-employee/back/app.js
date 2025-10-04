import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

let dburl = "mongodb+srv://jamessteppingstone:wPlVhhEuxtSm1xHM@cluster0.pp2xrpj.mongodb.net/";

let conn = mongoose.connect(dburl)

let Company = mongoose.model("company", mongoose.Schema({
    title : String
}))

let Employee = mongoose.model("emploayee", mongoose.Schema({
    name : String,
    cid : { type : mongoose.Schema.Types.ObjectId, ref : "company" }
}))


let app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors());


app.post("/api/v1/company", async(req, res)=>{
    let result = await Company.create(req.body);
    res.send(result)
})
app.post("/api/v1/employee", async(req, res)=>{
    let result = await Employee.create(req.body);
    res.send(result)
})
app.get("/api/v1/company", async(req, res)=>{
    let result = await Company.find();
    res.send(result)
})
app.get("/api/v1/employee/:cid", async(req, res)=>{
    let x = req.params.cid;
    let result = await Employee.find({ cid : x });
    res.send(result)
})
app.get("/api/v1/employee", async(req, res)=>{
    
    let result = await Employee.find();
    res.send(result)
})



app.listen(3000, ()=>{
    console.log("running")
})