import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)
  const addValue = () =>{
    if(counter<20){
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
    }
  }
  const removeValue = () =>{
   if(counter>0){
    setCounter(counter-1)
   }
  }
  
  return (
    <>
      <h1>Reading room aur react...</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value </button>
      <p>footer: </p>
    </>
  ) 
}

export default App
