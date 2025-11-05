import React from 'react'
import Nav from '../Navber/Nav'
import { Outlet } from 'react-router-dom'



function Rout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Rout