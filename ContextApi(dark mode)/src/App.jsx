import { useState } from 'react'
import UserContextprovider from './context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/profile'

function App() {
  return (
  <UserContextprovider>
<h1>Learing Context Api</h1>
    <Login/>
    <Profile/>
  </UserContextprovider>
  )
}

export default App
