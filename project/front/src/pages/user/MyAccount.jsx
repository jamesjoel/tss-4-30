import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
const MyAccount = () => {

  let [user, setUser] = useState({});

  useEffect(()=>{
    axios
    .get(`${API_URL}/user/profile`, 
      { 
        headers : 
          { 
            Authorization : localStorage.getItem("user_access") 
          }
      })
    .then(response=>{
        // console.log(response.data);
        setUser(response.data);
    })
  },[])

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-3">
          <div className='alert alert-secondary'>
            <small>Hello</small>
            <h5 className='m-0'>James</h5>
          </div>
          <div className='alert alert-secondary'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-briefcase" aria-hidden="true"></i> My Orders &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-user" aria-hidden="true"></i> Profile Information &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-address-book" aria-hidden="true"></i> Manage Address &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-heart" aria-hidden="true"></i> Wishlist &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-power-off" aria-hidden="true"></i> Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className='alert alert-secondary'>
            <h5>Profile Information</h5>
            <a href='' className='btn btn-sm btn-info'>Edit</a>
            <br />
            <br />
            <div className='row'>
              <div className='col-md-6'>
                <input type='text' value={user.name} disabled className='disabled form-control' />

              </div>
              <div className='col-md-6'>
                <input type='text' value="" disabled className='disabled form-control' />

              </div>
              <div className='row my-3'>

              <div className='col-md-6'>
                <input type='text' value={user.email} disabled className='disabled form-control' />

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount