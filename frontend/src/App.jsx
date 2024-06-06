import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([]);  
   
  useEffect(()=>{
    axios.get('/api/jokes')
     .then((res)=>{
      setJokes(res.data);
     })
     .catch((error)=>{
         console.log(error);
     })
  },[])

  return (
    <>
      <h1>Sanjay Rai, Hello</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke)=>{
           return <div key={joke.id}>
             <h3>{joke.title}</h3>
             <p>{joke.content}</p>
           </div>
        })
      }
    </>
  )
}

export default App
