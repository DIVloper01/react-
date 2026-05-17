import { useEffect, useState } from 'react'
import Useref from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count);
    
  }, [count]);
  return (
    <>
      <div className='text-4xl flex gap-7 m-20'>
        <button className='bg-amber-100' onClick={()=>{setCount(count+1)}}>+</button>
        <h1>{count}</h1>
        <button className='bg-violet-400' onClick={()=>{setCount(count-1)}}>-</button>

      </div>
    </>
  )
}

export default App
