import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then(res=>{
      setJokes(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <center>
      <h1>Full stack</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke)=>{
          return <>
            <div key={joke.id}>{joke.title}</div>
            <p>{joke.content}</p>
          </>
        })
      }
    </center>
  )
}

export default App
