import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URl } from './config/API'
import LoginSchema from './schemas/LoginSchema'
import {useNavigate} from 'react-router-dom'


const Login = () => {

  let navigate = useNavigate();

  let [errMsg, setErrMsg] = useState(" ")

  let loginFrm = useFormik({

    validationSchema: LoginSchema,
    initialValues: {

      username: "",
      password: ""
    },

    onSubmit: (FormData) => {
      axios
        .post(`${API_URl}/adminauth`, FormData)
        .then(response => {
          console.log(response.data)
          if (response.data.success == true){
          
            let token = response.data.token;
            let name = response.data.name;
            localStorage.setItem("admin_access", token);
            localStorage.setItem("admin_name", name);
            navigate("/dashboard")
          }
          else{
            if (response.data.errType ==1){
              setErrMsg("This Username or Password is Incorrect !")
            }
            if (response.data.errType ==2){
              setErrMsg("This Password is Incorrect !")
            }
          }
        })

    }
  })
  return (
    <>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <div
          className="position-relative overflow-hidden text-bg-light min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">



            <div className="row justify-content-center w-100">
              <div className="col-md-6">
                <form onSubmit={loginFrm.handleSubmit}>
                  <div className="card mb-0">
                    <div className="card-body">
                      {/* <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="/public/images/logos/logo.svg" alt=""/>
                </a> */}
                      <h2 className='text-center'>Administrater</h2>
                      {/* <p className="text-center">Your Social Campaigns</p> */}

                      <div className="mb-3">
                        <label className="form-label">Username {loginFrm.errors.username && loginFrm.touched.username ? <span className='text-danger'>{loginFrm.errors.username}</span> : ''}</label>
                        <input name='username' onChange={loginFrm.handleChange} type="text" className={"form-control " + (loginFrm.errors.username && loginFrm.touched.username ? "is-invalid" : "")} />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Password  {loginFrm.errors.password && loginFrm.touched.password ? <span className='text-danger'>{loginFrm.errors.password}</span> : ''}</label>
                        <input name='password' onChange={loginFrm.handleChange} type="password" className={"form-control " + (loginFrm.errors.password && loginFrm.touched.password ? "is-invalid" : "")} />
                      </div>

                      <button type='submit' className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Log in</button>
                      <p className='text-danger text-center'>
                        {errMsg}
                      </p>

                    </div>
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Login