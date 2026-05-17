import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from '../comp/Form'
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState([]);
  fetch('https://692d25f1e5f67cd80a4a47e6.mockapi.io/form')
  .then((res)=>res.json()).
  then((data)=>setdata(data))
  function handleadd(item){
     axios.get()
      setdata( (old)=>[item, ...old])
  }
  function handleDelete(index){
    setdata(old => old.filter((_, i) => i !== index))
  }
  useEffect(() => {
    console.log(axios.isCancel('something'));
  }, []);
  return (
    <>
        <h1>Lets see what can we do</h1>
        <Form data ={data} handleFunction = {handleadd} handleDelete = {handleDelete} />
    </>
  )
}

export default App
