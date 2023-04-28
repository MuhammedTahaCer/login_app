import React from 'react'
//import all modules from react router:
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/* import all components (uı pages) from conponents folder */
import Username from  './components/Username';
import Password from  './components/Password';
import Register from  './components/Register';
import Recovery from  './components/Recovery';
import Reset from  './components/Reset';
import Profile from  './components/Profile';
import PageNotFound from  './components/PageNotFound';


/* root routers */
const router=createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/password',
        element: <Password></Password>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '/profile',
        element: <Profile></Profile>
    },
    {
        // path: '*' -> speciftyin abstract
            /** if there is an invalid route... */
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])



export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
        {/* <RouterProvider router={}></RouterProvider> -> Router çağırma örneği */}
    </main>
  )
}
