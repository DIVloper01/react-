import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './comp/Navbar'
import Login from './comp/Login'
import Contact from './comp/Contact'
function App() {
  const [count, setCount] = useState(0)
  const rout = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <h1>Home Page</h1> </>
    },
    
    {
      path: "/Login",
      element: <> <Navbar /> <Login /></> 
    },
    
    {
      path: "/Contact",
      element: <> <Navbar /> <Contact /></> 
    }
    
  ])
  return (
    <>
      <RouterProvider router={rout} />

    </>
  )
}

export default App
