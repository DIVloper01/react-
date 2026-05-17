import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const  [theme, setTheme] = useState('light')
  return (
    <>
      {/* Navbar */}
      
      <div className=' min-h-screen flex flex-col    items-center  text-5xl font-bold '>

        <div className='bg-black p-3 text-white w-full flex justify-evenly  text-3xl items-center'>
          <p>Home</p>
          <p>About </p>
          <p>Contact</p>
        </div>

        <div className='text-2xl  grow flex items-center justify-center w-full'>
          Body
        </div>

        <div className=' text-3xl justify-flex-end bg-black p-3 text-white w-full flex mt-auto'>
          Footer
        </div>

      </div>

    </>
  )
}

export default App
