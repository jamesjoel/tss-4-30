import mongoose from '../db/conn.js';
let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
    gender : String,
    city : String,
    address : String
}, {timestamps : true})

const User = mongoose.model("user", UserSchema);

export default User;