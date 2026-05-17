import React from 'react'

const FormOutput = ({data,handleDelete}) => {
  return (
    <>
        <div className='flex justify-center items-center'>
           {
            data.map((item, index) => (
              <div key={index} className='bg-amber-500 p-2 my-2 flex items-center gap-4'>
                <span className='text-xl'>{index}</span>
                <span className='text-xl'>{item.name}</span>
                <span className='text-xl'>{item.reg}</span>
                <span className='text-xl'>{item.roll}</span>
                <button className='bg-red-700 p-2 text-xl text-white rounded' onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))
           }

        </div>
    </>
  )
}

export default FormOutput