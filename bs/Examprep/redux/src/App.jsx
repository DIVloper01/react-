import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './Redux/counter/CounterSlice.js'
import { addtodo } from './Redux/todo/TodoSlice.js'
function App() {
  // const count = useSelector((state=>state.counter.value))
  const [text, setText] = useState("");
  const Dispatch = useDispatch();
  const todos = useSelector((state) => state.todo)

  return (
    <>
      <div>

        <input type="text" placeholder='Enter task' onChange={(e) => setText(e.target.value)} />
        <button onClick={() => Dispatch(addtodo(text))}>Add</button>
        {/* <button onClick={()=> Dispatch(increment())}>+</button>
        <button onClick={()=> Dispatch(incrementByAmount(6))}>increment</button>
        <p>This is the counter {count}</p>
        <button onClick={()=> Dispatch(decrement())}>-</button> */}
        <ul>
          {todos.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>

    </>
  )
}

export default App
