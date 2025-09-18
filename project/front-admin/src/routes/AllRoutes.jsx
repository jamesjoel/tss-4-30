import React from 'react'
import {Routes, Route} from 'react-router-dom'
import  Login  from '../Login'
import Dashboard from '../pages/Dashboard'
import ProtactedRoute from './ProtactedRoute'
import Logout from '../pages/Logout'
import ListCategory from '../pages/categories/ListCategory'
import AddCategory from '../pages/categories/AddCategory'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='' element={<ProtactedRoute />}>

          <Route path='/category' element={<ListCategory />} />
          <Route path='/category/add' element={<AddCategory />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/logout' element={<Logout />} />
        </Route>


    </Routes>
  )
}

export default AllRoutes