import User from '../models/User.js';
import sha1 from 'sha1'
let SaveUser = async(req, res)=>{
    //console.log(req.body);
    delete req.body.repassword;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({success:true});
}


let DeleteAll = async(req, res)=>{
    await User.deleteMany();
    res.send("All Data Deleted")
}

export {SaveUser, DeleteAll}