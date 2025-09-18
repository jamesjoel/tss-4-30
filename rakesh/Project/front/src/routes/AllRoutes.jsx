import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Mycart from '../pages/Mycart'
import UnprotectedRoutes from './UnprotectedRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import MyAccount from '../pages/user/MyAccount'
import LogOut from '../pages/user/LogOut'

const AllRoutes = () => {
  return (
    <Routes>

         <Route path='/' element={<UnprotectedRoutes/>}>

        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='mycart' element={<Mycart/>}/>

        </Route>

        <Route path='/user' element={<ProtectedRoutes />}>
           <Route path='myaccount' element={<MyAccount />}/>
           <Route path='logout' element={<LogOut />}/>
        </Route>

    </Routes>
  )
}

export default AllRoutes