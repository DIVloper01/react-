// FormOutput.jsx
import React from 'react';

const FormOutput = ({ data, handleDelete }) => {

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((value, index) => (
        <div key={index} className='bg-amber-600 flex justify-center space-x-20 text-3xl'>
          <span className='w-[5%]'>{index}</span>
          <span className='w-[10%]'>{value.name}</span>
          <span className='w-[10%]'>{value.reg}</span>
          <span className='w-[10%]'>{value.cgpa}</span>
          <span className='w-[5%] cursor-pointer' onClick={() => handleDelete(index)}>Delete</span>
        </div>
      ))}
    </>
  );
}

export default FormOutput;
