import * as YUP from "yup";



let LoginSchema = YUP.object({
    email : YUP.string().email("Email id is Incorret").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Passwprd")
})

export default LoginSchema;