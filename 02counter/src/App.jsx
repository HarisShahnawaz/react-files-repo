
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 70) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React  Program</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}> Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p> {counter}</p>
    </>
  )
}

export default App