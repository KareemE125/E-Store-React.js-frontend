/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropDownMenu from './DropDownMenu';

import '../css/NavBarStyle.css'
import logo from '../assets/store.png'

export default function NavBar() {
    const [width, setWidth] = useState(null);
    const widthListener = useCallback(() => setWidth(window.innerWidth), [],)


    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', widthListener)
        return (() => {
            window.removeEventListener('resize', widthListener);
        })
    }, [])


    return <nav className='dark bg-black text-white shadow-md px-10 py-4  fixed top-0 left-0 right-0 z-50 flex items-center justify-between'>
        <NavLink className="navbrand nav-link flex gap-2" to='/'>
            <img src={logo} alt="Logo" className='w-8' />
            <h1 className='text-3xl font-bold logo'>E-Store</h1>
        </NavLink>

        {
            width <= 700 ? <DropDownMenu />
                : <ul className='flex text-lg font-medium gap-x-4'>
                    <li>
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/users'>Users</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/about-us'>About Us</NavLink>
                    </li>
                </ul>
        }

    </nav>

}
