// Form.jsx
import React from 'react';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

const Form = ({ handleFunction, data, handleDelete }) => {
  return (
    <>
      <FormInput handleFunction={handleFunction} />
      <FormOutput data={data} handleDelete={handleDelete} />
    </>
  );
}

export default Form;
