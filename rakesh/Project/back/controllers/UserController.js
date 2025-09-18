import User from "../models/User.js";
import sha1 from 'sha1';
import jwt from 'jsonwebtoken'
import { ENC_KEY } from "../config/config.js";

let SaveUser = async(req , res)=>{
    //console.log(req.body);
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({success:true});

}
  let DeleteAll = async(req ,res)=>{
    await User.deleteMany();
    res.send("All Data Is Deleted")
  }
  
  let Profie = async(req,res)=>{
    
    if (req.headers.authorization){
      let token =req.headers.authorization;
      let userobj = jwt.decode(token, ENC_KEY);
      if (userobj){

      let id = userobj._id;
      let result = await User.find({_id : id, "-passwoed"});
      console.log(result[0]);
      res.send(result[0]);
     

      }
      else{
         res.send({success : false , message : "Un-Authorized User"})
      }

    }
    else{
      res.send({success : false , message : "Un-Authorized User"})
    }

  }

export {SaveUser, DeleteAll, Profie}