import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserContextProvider from './context/UserContextProvider';  
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>react with harry</h1>
    </UserContextProvider>
  )
}

export default App
