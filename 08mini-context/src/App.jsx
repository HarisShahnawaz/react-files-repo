import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider';  
import './App.css'
import Login from './components/login';
import Profile from './components/Profile';
import UserContext from './context/userContext';
function App() {
  

  return (
    <UserContextProvider>
      <h1>react with harry</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
