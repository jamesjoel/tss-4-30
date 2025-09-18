import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const ProtectedRoutes = () => {


   let navigate = useNavigate();


   useEffect(()=>{
      if (! localStorage.getItem("user_access")){
         navigate('/login');
      }

   },[]) 
  return (
         <>
            <div style={{minHeight : '700px'}}>

                <Outlet/>
               
             </div>
            
        </>   
   )
}

export default ProtectedRoutes;