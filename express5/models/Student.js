import mongoose from "../config/db.js";

let StudentSchema = mongoose.Schema({
    fname : String,
    lname : String,
    class : Number
})

let Student = mongoose.model("student", StudentSchema);

export default Student;