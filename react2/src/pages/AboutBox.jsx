import React from 'react'
import { Outlet } from 'react-router-dom'

const AboutBox = () => {
  return (
    <>
    <Outlet />
    <div style={{backgroundColor : "red", height : "50px"}}></div>
    </>
  )
}

export default AboutBox