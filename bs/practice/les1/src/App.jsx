import React, { useRef } from 'react'

const App = () => {
  const ref = useRef("");

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center justify-center p-2 bg-zinc-900 text-white w-[50vw]'>
          <h1 className='text-3xl '>To Do List</h1>

              <input className='px-3 py-2' type="text" placeholder='Enter task ' />
              <div className='flex flex-col  gap-3'> 
                  
              </div>
        </div>
      </div>
    </>
  )
}

export default App