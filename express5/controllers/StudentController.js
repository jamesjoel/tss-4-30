import Student from "../models/Student.js";
let GetAllStudent = async(req, res)=>{
    let result = await Student.find();
    res.send(result)
}

let SaveStudent = async(req, res)=>{
    // console.log(req.body);
    let studata = req.body;
    await Student.create(studata)
    res.send("Data Saved");
}


let demo = async(req, res)=>{
    console.log(req.params.a);
    console.log(req.params.b);
}

let GetStuById = async(req, res)=>{
    let x = req.params.a;

    try{

        let result = await Student.find({_id : x});
        if(result.length==0){
            res.send("No Data found")
        }else{
            res.send(result)
        }
    }
    catch(err){
        res.send("Invalid ID")
    }

    
}

let DeleteStubyId = async(req, res)=>{
    let id = req.params.a;
    await Student.deleteMany({_id : id});
    res.send("Data Deleted");
}


let UpdateStuById = async(req, res)=>{
    let id = req.params.id;
    await Student.updateMany({_id : id}, req.body);
    res.send("Data Updated");
}

export {GetAllStudent, UpdateStuById,  SaveStudent, demo, GetStuById, DeleteStubyId}

/*
                    HTTP                    Mongoose

Create              --- .post           --- Model.create
Read/Retrive        --- .get            --- Model.find
Update              --- .put            --- Model.updateMany
Delete              --- .delete         --- Model.deleteMany



Mongoose


    let result = Model.find()            --- all data
    let result = Model.find({ })            --- find where city="indore" data

    Model.create({})
    Model.insertMany([{}, {}, ....])

    Model.deleteMany({ city : "indore" })

    Model.updateMany({}, { fee : 5000 })




    Teacher CRUD System Node-Express-Mongoose

    Teacher ReST API

    HTTP                - Hyper Text Transfer Protocol
    Domain              - http://www.facebook.com
    URL                 - http://www.facebook.com/about  ---- HTML/CSS   Uniform Resorce Locator
    API                 - http://www.facebook.com/api/v1/about  ---- JSON Application Programming Interface

    ReST API            -
    Re-State Transfer







     localhost:3000/api/v1/student/save     
     localhost:3000/api/v1/student/update     
     localhost:3000/api/v1/student/delete     
     localhost:3000/api/v1/student/     
        
    ReST
     localhost:3000/api/v1/student
     localhost:3000/api/v1/student/city/indore

     routes.get("/city/:a")




*/