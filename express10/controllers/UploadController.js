import path from 'path';

let Upload = async(req, res)=>{
    // all Form input data come in ---- req.body
    // all parameterized url data come in  ---- req.params
    // all headers data come in  ---- req.headers
    // all file data come in  ---- req.files
    // console.log(req.files);
    let file = req.files.hello;
    let name = file.name;
    let filepath = path.resolve()+"/assets/"+name;
    // file.mv(filepath, (err)=>{
    //     console.log("FILE UPLOADED")
    // });
    file.mv(filepath);
    console.log("file upload");
}

export {Upload}

/*
    let file = req.files.image;
    try{
        await file.mv(path)
    }catch(err){
    
    }



*/