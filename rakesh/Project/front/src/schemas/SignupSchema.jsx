import * as YUP from 'yup';

let SignupSchema =YUP.object({
  name : YUP.string().required("INsert Your FULL Name"),
  email : YUP.string().email("Email id is not correct").required("INsert Your Email ID"),
  password : YUP.string().required("INsert Your Password"),
  repassword : YUP.string().required("INsert Your Re-Password"),
  city : YUP.string().required("Select Your City"),
  gender : YUP.string().required("Inser Your Gender"),
  address : YUP.string().required("Inser Your address"),
  contact : YUP.string().required("Inser Your Contact Number"),
});

export default SignupSchema;
