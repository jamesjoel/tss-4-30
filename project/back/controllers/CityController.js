import City from "../models/City.js";

let GetAllCity = async(req, res)=>{
    let result = await City.find();
    res.send(result)
}

export {GetAllCity};