import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


export default function RootLayout()
{

  return <>
    <NavBar/>
    <div className='dark pt-28 px-8 md:px-12'>
      <Outlet></Outlet>
    </div>
  </>
}
