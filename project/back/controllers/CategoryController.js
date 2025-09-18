import Cate from "../models/Category.js";

let SaveCategory = async(req, res)=>{
    let result = await Cate.create(req.body);
    res.send({success:true, result});
}
let GetAllCategory = async(req, res)=>{
    let result = await Cate.find();
    res.send({success:true, result});
}
let GetByIdCategory = async(req, res)=>{

    let result = await Cate.find({_id : req.params.id});
    res.send({success:true, result:result[0]});
}
let UpdateCategory = async(req, res)=>{
    let result = await Cate.updateMany({_id : req.params.id}, req.body);
    res.send({success:true, result});
}
let DeleteCategory = async(req, res)=>{
    let result = await Cate.deleteMany({_id : req.params.id});
    res.send({success:true, result});
}

let DeleteAll = async(req, res)=>{
    await Cate.deleteMany();
    res.send("data deleted")
}

export {SaveCategory, DeleteAll, UpdateCategory, DeleteCategory, GetAllCategory, GetByIdCategory}