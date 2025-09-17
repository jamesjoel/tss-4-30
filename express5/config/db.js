import mongoose from "mongoose";

mongoose
.connect("mongodb+srv://jamessteppingstone:wPlVhhEuxtSm1xHM@cluster0.pp2xrpj.mongodb.net/")
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log("DB NOT Connected", err)
})


export default mongoose;