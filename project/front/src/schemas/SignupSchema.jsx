import * as YUP from  'yup';

let SignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Email Id is Not Correct").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),


    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),




    contact : YUP.number().typeError("Insert Numbers Only").required("Insert Your Contact Number"),
    gender : YUP.string().required("Select Your Gender"),
    address : YUP.string().required("Insert Your Address"),
    city : YUP.string().required("Select Your City"),
});

export default SignupSchema;