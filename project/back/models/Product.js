import mongoose from '../db/conn.js';
let ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    color : String,
    size : String,
    discount : Number, 
    detail : String,
    cate_id : { type : mongoose.Schema.Types.ObjectId, ref : "category" },
    sub_cate_id : { type : mongoose.Schema.Types.ObjectId, ref : "subcategory" },
    
}, {timestamps : true})

const Pro = mongoose.model("product", ProSchema);

export default Pro;