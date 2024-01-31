import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useStatae is used to propogate all changes it returns array in which at 0 index var,1 index func
  let[count, setCount] = useState(9)
  const addValue=()=>{
    setCount(count+1)
  }
  const removeValue =()=>{
    console.log(count);
    setCount(count-1)
  }
  return (
    <>
<h1>Fighter Gang {count} </h1>
<button onClick={addValue}>ADD</button> 
<button onClick={removeValue}>remove</button><br></br>  
    </>
  )
}

export default App
