import React, { useState, useEffect } from 'react'

const Count = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  // useEffect(() => {
  //   console.log("component changed");

  // }, [count])
 function clearText(e) {
  e.preventDefault();

  setStatus("Text running");

  setTimeout(() => {
    setText("");
    setStatus("Text cleared");
  }, 3000);
} 

  return (
    <>
      <div className='flex gap-5 justify-center bg-blue-500  text-4xl p-5'>
            <form  action="">
                  <textarea placeholder='enter text' className='h-40 p-5 bg-amber-100 rounded-2xl' name="text" id="" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <button className='bg-red-500 text-white p-2 rounded-xl' onClick={clearText}>Clear</button>
                    <p>{status}</p>
            </form>
      </div>
      <div className='bg-green-400 text-black'>

      </div>
    </>

  )
}

export default Count