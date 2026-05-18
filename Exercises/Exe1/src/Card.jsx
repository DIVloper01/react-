import React from 'react'

const Card = ({ name, age, status }) => {
  function toggle(e){
    if(status == "Online"){
      status = "Offline"
    }else{
      status = "Online"
    }
  }
  return (
    <>
      <div className='bg-zinc-500 p-4 flex flex-col items-center rounded-2xl gap-2'>
        <h1 className='text-xl font-bold'>
          {name}
        </h1>
        <p className='text-zinc-300'>
          Age: {age}
        </p>
        <p className='text-zinc-300'>
          Status: {status}
        </p>
        
        <button className='p-3 bg-blue-600 rounded-xl text-white ' onClick={toggle}>toggle</button>

      </div>
    </>
  )
}

export default Card