import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setage] = useState("")
  const [errors, setErrors] = useState({})

  // const validate = () => {
  //   let newErrors = {};

  //   if (name.length < 2) {
  //     newErrors.name = "Name must be at least 2 characters";
  //   }

  //   if (!email.includes("@")) {
  //     newErrors.email = "Invalid email address";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const validateemail=(e)=>{
      const value = e.target.value;
      setEmail(value)

      if(!value.includes("@")){
        setErrors({...errors, email: "Invalid email address"})
      }else{
        const newErrors = {...errors};
        delete newErrors.email;
        setErrors(newErrors);
      }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ name, email });
    }
  };
  return (
    <>
      <div className='flex justify-center items-center bg-zinc-900 h-[70vh] w-[70vw] text-white mx-auto mt-20 rounded-lg flex-col gap-4'>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>
          <input className='p-3 w-[20vw] rounded-xl bg-zinc-700' 
          placeholder='Enter your Name' type="text" 
          name='name' value={name} 
          onChange={(e) => setName(e.target.value)} />


          <input className='p-3 w-[20vw] rounded-xl bg-zinc-700'
           placeholder='Enter your Email' type="email"
            value={email} 
            onChange={validateemail} name='email' />
          
          <button className='p-3 bg-blue-600 rounded-xl hover:bg-blue-700' type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App
