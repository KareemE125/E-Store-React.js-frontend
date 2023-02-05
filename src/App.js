import React, { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import Home from './Pages/Home'
import Users from './Pages/Users.jsx';
import Products from './Pages/Products.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import NotFound from './Pages/NotFound'

import './App.css';
import UserProducts from './Pages/UserProducts.jsx';
import ProductsInfo from './Pages/ProductsInfo.jsx';



const HOME_ROUTE = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, children: [
      { index: true, element: <Home /> },
      {
        path: '/users', element: <Outlet></Outlet>,
        children: [
          { index: true, element: <Users /> },
          { path: ':userId/owned-products', element: <UserProducts /> },
        ]
      },      
      { path: '/products', element: <Products /> },
      { path: '/products/info', element: <ProductsInfo /> },
      { path: '/about-us', element: <AboutUs /> },
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
