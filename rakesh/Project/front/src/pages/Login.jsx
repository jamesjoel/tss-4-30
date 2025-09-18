import React from 'react'
import { NavLink , Navigate, useNavigate } from 'react-router-dom'
import './Style.css'
import { useFormik } from 'formik'
import LoginSchema from '../schemas/LoginSchema'
import { API_URL } from '../config/API'
import axios from 'axios';
import { useState } from 'react'

const Login = () => {

  let Navigate = useNavigate();
  let [errMSg, setErrMsg] = useState("");
   let [isLoading, setIsLoading]=useState(false);

  let LoginFrm = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      email: "",
      password: ""

    },
    onSubmit: (FormData) => {
      setIsLoading(true);

      axios
        .post(`${API_URL}/userauth`, FormData)
        .then(response => {
            setIsLoading(false);
          if (response.data.success == true) 
            {
                  let token =response.data.token;
                  let name = response.data.name;
                  localStorage.setItem("user_access", token);
                  localStorage.setItem("user_name", name)
                  Navigate('/');

          }
          else {
            if (response.data.errType == 1) {
              setErrMsg("This Email id or Password is Incorrect !")
            }
            if (response.data.errType == 2) {
              setErrMsg("This Password is Incorect !")
            }
          }
        }
        )
    }

  })
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={LoginFrm.handleSubmit}>
            <div className='login-box'>
              <h3>login</h3>
              <p className='sub-title'>If you a New  member then <NavLink to="/signup">Click here</NavLink></p>

              <div className='my-4'>
                <label>Email</label>
                <input onChange={LoginFrm.handleChange} name='email' type='text' placeholder='Email' className={'form-control ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} />
                {
                  LoginFrm.errors.email && LoginFrm.touched.email
                    ?
                    <small className='text-danger'>{LoginFrm.errors.email}</small>
                    :
                    ''
                }
              </div>
              <div className='my-4'>
                <label>Password</label>
                <input onChange={LoginFrm.handleChange} name='password' type='password' placeholder='Password' className={'form-control ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} />
                {
                  LoginFrm.errors.password && LoginFrm.touched.password
                    ?
                    <small className='text-danger'>{LoginFrm.errors.password}</small>
                    :
                    ''
                }
              </div>
              <div className='row'>
                <div className="col-md-4 offset-md-4">
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-dark'>Login  {isLoading ? <span className='spinner-border spinner-border-sm'></span> : "" }</button>
                  </div>


                </div>
              </div>
              <p className='text-danger text-center mt-3'>{errMSg}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login