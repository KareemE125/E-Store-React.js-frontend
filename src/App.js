import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import Home from './Pages/Home'
import Users from './Pages/Users.jsx';
import Products from './Pages/Products.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import NotFound from './Pages/NotFound'

import './App.css';



const HOME_ROUTE = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, children: [
      { index: true, element: <Home /> },
      { path: '/users', element: <Users /> },
      { path: '/products', element: <Products /> },
      { path: '/about-us', element: <AboutUs /> },
      // {
      //   path: '/movies', element: <Outlet></Outlet>,
      //   children: [
      //     { index: true, element: <Movies /> },
      //     { path: 'details/:type/:id', element: <ItemDetails /> },
      //   ]
      // },
      { path: '*', element: <NotFound /> },
    ]
  }
]);


export default function App() 
{

  useEffect(() => {
    console.log('====================================');
    console.log("DID APP MOUNT");
    console.log('====================================');
  }, [])

    return <RouterProvider router={HOME_ROUTE} />

}
