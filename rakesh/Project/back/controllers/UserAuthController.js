import User from "../models/User.js";
import sha1 from 'sha1'
import {ENC_KEY} from '../config/config.js'
import jwt from 'jsonwebtoken'

let Auth = async (req, res) => {
   
    let { email, password } = req.body;
    let result = await User.find({ email : email});
    if (result.length==1){
        if (result[0].password == sha1(password))
        {
            let userobj= {_id : result[0]._id};
            let token = jwt.sign(userobj, ENC_KEY);
            let name = result[0].name;
            res.send({success:true, token,name})

            
            res.send({success :true, token : name})

        }
        else{
            res.send({success:false, errType : 2})
        }
        

        }
        else{
           res.send({success : false , errType : 1 })
        }

}
export default Auth;