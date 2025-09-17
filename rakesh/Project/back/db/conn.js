import mongoose from 'mongoose'
import { DB_URL } from '../config/config.js'


mongoose
.connect(DB_URL)
.then(()=>{
    console.log("datebase Connected");
})
.catch((err)=>{
    console.log("database NOT connected",err);
})
export default mongoose;







//Rakesh@18Sirvaiya
//sirvaiyarakesh18-username
//mongodb+srv://sirvaiyarakesh18:<db_password>@cluster0.qzi2gwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0