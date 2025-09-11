import User from "../models/User.js";
import sha1 from 'sha1'

let Auth = async(req, res)=>{
    let {email, password} = req.body; // {email : "sdfgsdfg@g.com", passwrod : "sdfgsdg"}
    let result = await User.find({email : email});
    if(result.length==1){ // email is correct
        if(result[0].password == sha1(password))
        {
            res.send({success:true})
        }
        else{
            res.send({success:false, errType: 2})
        }
    }
    else{ // email is incorrect
        res.send({success:false, errType : 1})
    }

}

export {Auth};