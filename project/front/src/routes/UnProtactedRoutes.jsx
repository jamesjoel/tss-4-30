import React from 'react'
import HeroBanner from '../components/HeroBanner'
import BlogPost from '../components/BlogPost'
import { Outlet } from 'react-router-dom'

const UnProtactedRoutes = () => {
  return (
    <>
    <HeroBanner />

    <div style={{minHeight : "700px"}}>
        <Outlet />
    </div>
    <BlogPost />
    </>
  )
}

export default UnProtactedRoutes