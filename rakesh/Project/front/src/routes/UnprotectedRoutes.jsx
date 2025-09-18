import React from 'react'
import Herobanner, {} from '../components/Herobanner'
import BlogPost, {} from '../components/BlogPost'
import { Outlet } from 'react-router-dom'


const UnprotectedRoutes = () => {
  return (
    <>
    <Herobanner/>
    <div style={{minHeight:"700px"}}>
        <Outlet/>
        </div>
    <BlogPost/>
    </>
  )
}

export default UnprotectedRoutes