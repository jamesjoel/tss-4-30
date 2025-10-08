import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyCart from '../pages/MyCart'
import UnProtactedRoutes from './UnProtactedRoutes'
import ProtactedRoutes from './ProtactedRoutes'
import MyAccount from '../pages/user/MyAccount'
import Logout from '../pages/user/Logout'
import Detail from '../pages/Detail'
import HeroBanner from '../components/HeroBanner'
import Buynow from '../pages/user/Buynow'
import Shop from '../pages/Shop'
const AllRoutes = () => {
  // :5173/shop/bags
  // :5173/shop/bags/hand-bags
  return (
    <Routes>

      <Route path='/' element={<UnProtactedRoutes />}>
        <Route path='' element={<RoutesForBanner />}>
          <Route path='' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='shop' element={<Shop />} />


        <Route path='contact' element={<Contact />} />
        <Route path='detail/:title/:id' element={<Detail />} />
        <Route path='mycart' element={<MyCart />} />
      </Route>

      <Route path='/user' element={<ProtactedRoutes />}>
        <Route path='buynow/:title/:id' element={<Buynow />} />
        <Route path='myaccount' element={<MyAccount />} />
        <Route path='logout' element={<Logout />} />
      </Route>

    </Routes>
  )
}

export default AllRoutes


let RoutesForBanner = ()=>{
  return(
    <>
    <HeroBanner />
    <Outlet />
    </>
  )
}