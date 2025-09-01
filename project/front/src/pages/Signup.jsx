import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'

const Signup = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='login-box'>
                    <h3>Registration</h3>
                    <p className='sub-title'>If you a Registered member then <NavLink to="/login">click here</NavLink></p>
                    <div className='my-4'>
                        <label>Name</label>
                        <input type='text' placeholder='Name' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <label>Email</label>
                        <input type='text' placeholder='Email' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <input type='password' placeholder='Password' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <label>Re-Password</label>
                        <input type='password' placeholder='Re-Password' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <label>Contact</label>
                        <input type='text' placeholder='Contact' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <label>Gender</label>
                        <br />
                        <label>Male</label> <input type='radio' name='gender' />&nbsp;&nbsp;&nbsp;
                        <label>Female</label> <input type='radio' name='gender'/>
                    </div>
                    <div className='my-4'>
                        <label>Address</label>
                        <textarea placeholder='Address' className='form-control'></textarea>
                    </div>
                    <div className='my-4'>
                        <label>City</label>
                        <select className='form-control'>
                            <option>Select</option>
                            <option>Indore</option>
                            <option>Mumbai</option>
                        </select>
                    </div>
                    <div className='my-4'>
                        <button type='submit' className='btn btn-primary'>Regsitration</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup