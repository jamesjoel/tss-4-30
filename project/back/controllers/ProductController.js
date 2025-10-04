import Product from "../models/Product.js";

let SaveProduct = async(req, res)=>{
    let result = await Product.create(req.body);
    res.send({success:true, result});
}
let GetAllProduct = async(req, res)=>{
    let result = await Product.find();
    res.send({success:true, result});
}
let GetByIdProduct = async(req, res)=>{

    let result = await Product.find({_id : req.params.id}).populate("cate_id").populate("sub_cate_id").exec();
    res.send({success:true, result:result[0]});
}
let UpdateProduct = async(req, res)=>{
    let result = await Product.updateMany({_id : req.params.id}, req.body);
    res.send({success:true, result});
}
let DeleteProduct = async(req, res)=>{
    let result = await Product.deleteMany({_id : req.params.id});
    res.send({success:true, result});
}

let DeleteAll = async(req, res)=>{
    await Product.deleteMany();
    res.send("data deleted")
}

export {SaveProduct, DeleteAll, UpdateProduct, DeleteProduct, GetAllProduct, GetByIdProduct}