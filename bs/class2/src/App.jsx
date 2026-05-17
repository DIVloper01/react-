import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './New.css'
function App() {
  const [count, setCount] = useState(0)
  const handleClick = ()=>[
    alert('Button CLIKED!')
  ]
  return (
    <>
      <div>
        NOT Welcome To Lovely Proffessional university
      </div>
    </>
  )
}

export default App
