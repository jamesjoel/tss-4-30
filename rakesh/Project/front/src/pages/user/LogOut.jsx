import React from 'react'
import {Navigate} from 'react-router-dom';

const LogOut = () => {
   localStorage.removeItem("user_access");
   localStorage.removeItem("name");
 return (
    <Navigate to='/login'/>
  )
}

export default LogOut;