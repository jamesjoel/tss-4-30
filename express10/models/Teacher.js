import mongoose from '../db/connect.js'

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    class : Number,
    gender : String,
    contact : String
    // createAt
    // updateAt
}, { timestamps :  true })


let Teacher = mongoose.model("teacher", TeacherSchema);

export default Teacher;