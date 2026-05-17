import React, { useReducer, useRef } from 'react'

const FormInput = ({ handleFunction }) => {
    const nameRef = useRef();
    const regRef = useRef();
    const rollRef = useRef();

    function handleadd() {
        const studentData = {
            name: nameRef.current?.value,
            reg: regRef.current?.value,
            roll: rollRef.current?.value
        }

        handleFunction(studentData)
        if (nameRef.current) nameRef.current.value = '';
        if (regRef.current) regRef.current.value = '';
        if (rollRef.current) rollRef.current.value = '';
        function reducer(state, action) {
            switch (action.type) {
                case "kuch bhi":
                    return console.log("kuch bhi ho gaya");
            }

        }
        const [value, dispatch] = useReducer(reducer, initial);
    }
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='bg-gray-400 space-x-10 text-2xl '>
                    <form  action="">
                        <input max={8} ref={nameRef} type="text" placeholder='Enter name' />
                        <input ref={regRef} type="text" placeholder='Enter Reg' />
                        <input ref={rollRef} type="text" placeholder='Enter rollno' />
                        <button onClick={handleadd} className='bg-blue-600 p-2 ' >Submit</button>
                        

                    </form>
                </div>

            </div>

        </>
    )
}

export default FormInput