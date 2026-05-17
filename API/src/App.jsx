import React, { useState , useEffect } from 'react'
import axios from 'axios';

const App = () => {
  let [ userName , setUsername] = useState('')
  let [ email , setEmail] = useState('')
  let [ phone , setPhone] = useState('')
  let [ pass, setPass] = useState('')
  let [fetchData , setFetchData] = useState([])

  useEffect( () => {
    axios.get('https://692d25ebe5f67cd80a4a4787.mockapi.io/form').then( res => setFetchData(res.data)).catch( err => console.log(err.message) )
  } , [] )

  let handleDelet = (id)=>{
    axios.delete(`https://692d25ebe5f67cd80a4a4787.mockapi.io/form/${id}`).then( (res)=> setFetchData( fetchData.filter( (item) => item.id !== id ) ) )
  }
  
  let handleSubmit = (e)=>{
    e.preventDefault();
    const strongRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(!userName || userName.length < 3 ){
      return alert("Name is required")
    } else if( phone.length != 10 || isNaN(phone)){
      return alert("Phone number must be 10 digits and numeric")
    } else if(!strongRegex.test(pass)){
      return alert("password must contain special character , and should be of 8 minimum characters");
    }
    let data = {
      name : userName,
      email : email,
      number : phone,
      password : pass
    }
    axios.post('https://692d25ebe5f67cd80a4a4787.mockapi.io/form' , data).then( res => {
      setFetchData( [...fetchData , res.data] )
      setUsername('')
      setEmail('')
      setPhone('')
      setPass('')
    })
  }
  
  return (
    <div className='bg-black text-white  p-3 m-3'>
      <form onSubmit={(e)=>{ handleSubmit(e)}} className='bg-zinc-800 p-4 space-x-14  ' action="">
        <input className='p-3 text-white' required onChange={(event)=>{ setUsername(event.target.value)}} type="text" name='name' placeholder='enter name'/>
        <input className='p-3 text-white' required onChange={(e)=>{ setEmail(e.target.value)}} type="email" name='email' placeholder='enter email'/>
        <input className='p-3 text-white' required onChange={(e)=> { setPhone(e.target.value) }} name='phone' type="tel" placeholder='enter Phone Number' />
        <input className='p-3 text-white' required onChange={(e)=>{ setPass(e.target.value)}} name="pass" type="password" placeholder='enter Password' />
        {/* <input className='p-3 text-white' required onChange={(e)=>{ setPass(e.target.value)}} name="pass" type="password" placeholder='enter Password' /> */}
        <input className='p-3 text-white bg-blue-700 rounded-xl cursor-pointer' type="submit" value="Click to Submit" />
      </form>
      <div>
       
        { fetchData.map( ( item , index) => (
        <div key={index} className='flex justify-between items-center p-3'>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.number}</p>
          <p>{item.password}</p>
          <div className='space-x-6'>
              <button className='bg-green-950 text-white rounded-full p-2'>Edit</button>
              <button onClick={()=>{ handleDelet(item.id)}} className='bg-red-950 text-white rounded-full p-2'>Delet</button>
          </div>
        </div>
        ))}
      </div>
      
    </div>
  )
}

export default App