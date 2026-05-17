import React from 'react'
import FormInput from './FormInput.jsx'
import FormOutput from './FormOutput.jsx'
import { useContext } from 'react'
import MyContext from '../MyContext.jsx'

const Form = () => {
  return (
    <>
      <div className='flex flex-col'>
        <FormInput  />
        <FormOutput  />
      </div>
    </>
  )
}

export default Form