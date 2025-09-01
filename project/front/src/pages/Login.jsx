import React from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='login-box'>
                    <h3>Login</h3>
                    <p className='sub-title'>If you a New member then <NavLink to="/signup">click here</NavLink></p>
                    <div className='my-4'>
                        <label>Email</label>
                        <input type='text' placeholder='Email' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <input type='password' placeholder='Password' className='form-control' />
                    </div>
                    <div className='my-4'>
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login