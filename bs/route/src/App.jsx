import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Contact />
    </>
  )
}

export default App
