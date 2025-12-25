import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const addvalue = () => {
    console.log("clicked", Math.random());
    counter = counter + 1;
    
  }
 let counter =  15
  return (
    <>
  <h1>Chai or react</h1>
  <h2>Counter value : {counter}</h2>
  <button onClick={addvalue}>Add Value</button>
  <br />
  <button>Remove value</button>
   
    </>
  )
}

export default App
