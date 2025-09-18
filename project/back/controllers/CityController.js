import City from "../models/City.js";

let GetAllCity = async(req, res)=>{
    // console.log(req.ip)
    

        let result = await City.find();
        res.send(result)
    
}

export {GetAllCity};