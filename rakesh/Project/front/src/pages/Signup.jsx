import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, NavLink , useNavigate} from 'react-router-dom'
import './Style.css'
import axios from 'axios'
import { useFormik } from 'formik'
import { API_URL } from '../config/API'
import SignupSchema from '../schemas/SignupSchema'


const Signup = () => {

  let Navigate=useNavigate();
  let [allCity, setAllCity] = useState([]);
  let [isLoading, setIsLoading]=useState(false);

  let SignupFrm = useFormik({
    validationSchema : SignupSchema,

    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      city: "",
      gender: "",
      address: "",
      contact: ""
    },
    onSubmit: (formData) => {
      setIsLoading(true);
    
      axios
        .post(`${API_URL}/user `, formData)
        .then(response => {
          setIsLoading(false);
          Navigate("/login")
          //console.log(response.data);
        })

    }
  })

  useEffect(() => {
    axios
      .get(`${API_URL}/city`)
      .then(response => {
        // console.log(response.data);
        setAllCity(response.data);
      })
  }, [])


  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={SignupFrm.handleSubmit}>
            <div className='login-box'>
              <h3>Registration</h3>
              <p className='sub-title'>If you a Registerd member then <NavLink to="/login">Click here</NavLink></p>

              <div className='my-4'>
                <label>Nmae</label>
                <input name='name' onChange={SignupFrm.handleChange} type='text' placeholder='Name' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? "is-invalid" : "")}/>
                {
                  SignupFrm.errors.name && SignupFrm.touched.name
                  ?
                  <small className='text-danger'>{SignupFrm.errors.name}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>Email</label>
                <input name='email' onChange={SignupFrm.handleChange} type='text' placeholder='Email' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : "") } />
                   {
                  SignupFrm.errors.email && SignupFrm.touched.email
                  ?
                  <small className='text-danger'>{SignupFrm.errors.email}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>Password</label>
                <input name='password' onChange={SignupFrm.handleChange} type='password' placeholder='Password' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? "is-invalid" : "")} />
                   {
                  SignupFrm.errors.password && SignupFrm.touched.password
                  ?
                  <small className='text-danger'>{SignupFrm.errors.password}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>Re-Password</label>
                <input name='repassword' onChange={SignupFrm.handleChange} type='password' placeholder='Re-Password' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? "is-invalid" : "")} />
                 {
                  SignupFrm.errors.repassword && SignupFrm.touched.repassword
                  ?
                  <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>Contact</label>
                <input name='contact' onChange={SignupFrm.handleChange} type='text' placeholder='contact' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? "is-invalid" : "")} />
                 {
                  SignupFrm.errors.contact && SignupFrm.touched.contact
                  ?
                  <small className='text-danger'>{SignupFrm.errors.contact}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>Address</label>
                <textarea placeholder='Address' name='address' onChange={SignupFrm.handleChange} className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? "is-invalid" : "")}></textarea>
                {
                  SignupFrm.errors.address && SignupFrm.touched.address
                  ?
                  <small className='text-danger'>{SignupFrm.errors.address}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>Gender</label>
                <br />
                <label>Male</label> <input type='radio' value="male" onChange={SignupFrm.handleChange} name='gender' />&nbsp;&nbsp;&nbsp;
                <label>Fe-Male</label> <input type='radio' value="female" onChange={SignupFrm.handleChange} name='gender' />
                  {
                  SignupFrm.errors.gender && SignupFrm.touched.gender
                  ?
                  <small className='text-danger'>{SignupFrm.errors.gender}</small>
                  :
                  ''
                }
              </div>
              <div className='my-4'>
                <label>city</label>
                <select className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? "is-invalid" : "")} name='city' onChange={SignupFrm.handleChange}>
                  <option>Select</option>
                  {
                    allCity.map(item => <option>{item.name}</option>)
                  }
                </select>
                 {
                  SignupFrm.errors.city && SignupFrm.touched.city
                  ?
                  <small className='text-danger'>{SignupFrm.errors.city}</small>
                  :
                  ''
                }

              </div>
              <div className='my-4'>
                <div className='row'>
                  <div className="col-md-8 offset-md-2">
                     <div className='d-grid'>
                   <button type='submit' className='btn btn-dark'>Registration {isLoading ? <span className='spinner-border spinner-border-sm'></span> : "" } </button>
              </div>


                  </div>
                </div>
               

                </div>
               
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup