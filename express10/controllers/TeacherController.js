import Teacher from '../models/Teacher.js';

let SaveTeacher = async(req, res)=>{
    try{

        let result = await Teacher.create(req.body);
        res.send({ success : true, result : result });
    }catch(err){
        res.send({success : false, err : err});
    }
}
let GetAllTeacher = async(req, res)=>{
    let result = await Teacher.find();
    res.send({ success : true, result : result });
}
let GetByIdTeacher = async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.find({_id : id});
    res.send({ success : true, result : result });
}
let UpdateByIdTeacher = async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.updateMany({_id : id }, req.body);
    res.send({ success : true, result : result });
}
let DeleteByIdTeacher = async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.deleteMany({_id : id});
    res.send({ success : true, result : result });
}

export {SaveTeacher, UpdateByIdTeacher, DeleteByIdTeacher, GetAllTeacher, GetByIdTeacher};
