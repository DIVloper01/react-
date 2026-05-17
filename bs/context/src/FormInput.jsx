// FormInput.jsx
import React, { useRef } from 'react';

const FormInput = ({ handleFunction }) => {
  const studentName = useRef(null);
  const studentReg = useRef(null);
  const studentCgpa = useRef(null);

  function handleadd() {
    const studentData = {
      name: studentName.current.value,
      reg: studentReg.current.value,
      cgpa: studentCgpa.current.value
    };


    handleFunction(studentData);

    
    studentName.current.value = '';
    studentReg.current.value = '';
    studentCgpa.current.value = '';
  }
   
  return (
    <div className='flex'>
      <div className='mx-auto mt-24 space-x-20 p-3 rounded-lg bg-zinc-800 text-white '>
        <form action="">

          <input type="text" className='p-3 text-white' placeholder='enter name' ref={studentName} />
          <input type="number" className='p-3 text-white' placeholder='enter Phone ' ref={studentName} />
          <input type="password" className='p-3 text-white' placeholder='enter another' ref={studentReg} />
          <input type="email" minLength={3} className='p-3 text-white' placeholder='enter email' ref={studentCgpa} />
          <button type='submit' onClick={handleadd} className='p-3 bg-gray-400 rounded-lg text-black cursor-pointer'>Click to add</button>

        </form>
      </div>
    </div>
  );
}

export default FormInput;
