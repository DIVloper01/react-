import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import MyContext from '../MyContext.jsx'

const FormInput = () => {
    const nameRef = useRef();
    const regRef= useRef();
    const cgpaRef = useRef();
    const {handleAdd} = useContext(MyContext);
    function handleSubmit(){
        const studentdata = {
            name: nameRef.current.value,
            reg: regRef.current.value,
            cgpa: cgpaRef.current.value
        }
        handleAdd(studentdata);  
    }
    return (
        <>

            <div className='flex  justify-center items-center mt-30 '>
                <div className='p-6 bg-zinc-700 text-white space-x-6    ' >
                    <input type="text" className='p-3'  placeholder='Enter your name' ref={nameRef} />
                    <input type="text" className='p-3' placeholder='Enter your Regno' ref={regRef} />
                    <input type="text" className='p-3' placeholder='Enter your Cgpa' ref={cgpaRef} />
                    <button onClick={handleSubmit} className='cursor-pointer bg-gray-600 p-3 rounded-lg'  type='submit' >Submit</button>
                </div>
            </div>
        </>
    )
}


export default FormInput