import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, settitle] = useState("")
  const [users, setuser] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data => setuser(data))
  //     .then(data=> console.log(data))

  // }, []);

    const updatePost = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Title",
          body: "New Body",
          sex: "male",
          age: "21",
          userId: 1
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    };
    function deleting(id){
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      }).then(console.log("post deleted")
      )
    }
  
  return (
    <>
      <h1>Lets Get the fetch data</h1>
      <div>
        <input type="text" placeholder='Enter title' onChange={(e) => settitle(e.target.value)} />
        <button onClick={updatePost}>Send </button>
        <button onClick={deleting()}>delete </button>
      </div>

    </>
  )
}

export default App
