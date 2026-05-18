import React, { use, useState } from 'react'
import Card from './Card';
const App = () => {
  const [name, setname] = useState("");
  // const [status, setstatus] = useState("");
  const [age, setage] = useState(0);
  // const [status, setstatus] = useState("");
  const [cards, setcards] = useState([]);
   function toggle(e){
    if(status == "Online"){
      status = "Offline"
    }else{
      status = "Online"
    }
  }
  function makeCard(e) {
    e.preventDefault();
    const newCard = {
      name,
      age,
      status: "Online"
    }
    setcards([...cards, newCard]);
    setname("");
    setage("");
  }
  return (
    <>
      <div className=' min-h-screen w-full flex flex-col bg-zinc-800 py-34 text-white items-center '>
        <form onSubmit={makeCard} className='flex flex-row gap-4'>
          <input value={name} onChange={(e) => { setname(e.target.value) }} className='bg-zinc-400 px-4' type="text" placeholder='enter Name ' />
          <input value={age} onChange={(e) => { setage(e.target.value) }} className='bg-zinc-400 px-4' type="number" placeholder='enter Age ' />
          {/* <select className="border p-2 rounded">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select> */}
          <button className='bg-blue-600 rounded-xl p-2 cursor-pointer'>Create User</button>
        </form>
        <div className=' p-4  grid grid-cols-3 gap-4 '>
          {
            cards.map((card, index) => (
              <Card key={index + 1} name={card.name} age={card.age} status={card.status} />
            ))
          }
        </div>
      </div>



    </>
  )
}

export default App