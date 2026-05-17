import React from 'react'
import FormInput from './FormInput'
import FormOutput from './FormOutput'

const Form = ({data,handleFunction,handleDelete}) => {

  return (
    <>
        <div >
            <FormInput handleFunction={handleFunction}  />
            <FormOutput data={data} handleDelete = {handleDelete}  />
        </div>
    </>
  )
}

export default Form