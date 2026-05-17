import { useRef, useState } from 'react'
import Rnd from './rnd';
function App() {
  const [count, setCount] = useState(0)
  const task = useRef();
  const task2 = useRef();
  const task3 = useRef();
  function handlefocus() {
      console.log(task.current.value);
      console.log(task2.current.value);
      console.log(task3.current.value);
  }
  return (
    <>
      {/* <div className='flex space-x-7 '>
        <div className='mx-auto mt-20 flex space-x-8'>
          <button className='bg-red-300 cursor-pointer text-4xl' onClick={handlecount}>Add</button>
          <p className='text-4xl' >{count}</p>
          <button onClick={handleminus} className='bg-green-300 cursor-pointer text-4xl'>Minus</button>
        </div>

      </div> */}
      <div className='flex justify-center items-center '>
        <div className='mx-auto flex flex-col   mt-20 '>
          <h1 className='text-4xl'>TO-DO LIST</h1>
          <Rnd />
          <input className='mt-5 p-2' placeholder='enter name' ref={task}></input>
          <input className='mt-5 p-2' placeholder='enter regNo.' ref={task2}></input>
          <input className='mt-5 p-2' placeholder='enter subject' ref={task3}></input>
          <button onClick={handlefocus}>add task</button>

        </div>

      </div>





    </>
  )
}

export default App
