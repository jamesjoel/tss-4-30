import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyCart from '../pages/MyCart'
import UnProtactedRoutes from './UnProtactedRoutes'
import ProtactedRoutes from './ProtactedRoutes'
import MyAccount from '../pages/user/MyAccount'
import Logout from '../pages/user/Logout'
const AllRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<UnProtactedRoutes />}>

        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='mycart' element={<MyCart />} />
      </Route>

      <Route path='/user' element={<ProtactedRoutes />}>
        <Route path='myaccount' element={<MyAccount />} />
        <Route path='logout' element={<Logout />} />
      </Route>

    </Routes>
  )
}

export default AllRoutes