import city from "../models/City.js";
let GetAllCity = async(req , res)=>{
     let result = await city.find();
     res.send(result)
}

export {GetAllCity};