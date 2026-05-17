import { useState } from 'react'
import Form from './component/Form'
import './App.css'
import { useLayoutEffect } from 'react';
import MyContext from './MyContext';
function App() {
  const [count, setCount] = useState(0)


  const [data,setdata] = useState([]);
  function handleAdd(item){
     
      
      setdata((old)=>[item, ...old])
      console.log("ran");
  }
  function handleDelete(index){
    setdata((old)=>old.filter((_,i)=>i!==index))
  }
  return (
    <>
    <MyContext.Provider value={{data,handleAdd,handleDelete}}>
      <h1 className='text-4xl '>We Are learning Form display with react </h1>
      <Form></Form>

    </MyContext.Provider>
    </>
  )
}

export default App
