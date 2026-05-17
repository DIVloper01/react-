import React from 'react'
import { use } from 'react'
import { useContext } from 'react'
import MyContext from '../MyContext.jsx'
const FormOutput = () => {
  const {data,handleDelete}  = useContext(MyContext);
  return (
    <div>
    {
      data.map((item,index)=>(
        <div
        key={index} 
        className='items-center justify-center bg-zinc-800 text-2xl text-white flex space-x-20 '>
          <h1>{index}</h1>
          <h1>{item.name}</h1>
          <h1>{item.reg}</h1>
          <h1>{item.cgpa}</h1>
          <button onClick={()=>{handleDelete(index)}} className='bg-red-800 rounded-xl '>Delete</button>
        </div>
          
      ))
    }
    </div>
  )
}

export default FormOutput