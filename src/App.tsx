import { useState } from 'react'
import reactLogo from './assets/cs.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <a href="https://codesegment.org/" target="_blank">
          <img src={reactLogo} className="logo react" alt="cs logo" />
        </a>
      </div>
      <h1>Code Segment</h1>
      <div className="">
       <p style={{fontSize:"24px"}}> <span style={{color:"#a555ec", fontWeight:"900"}}>CEO </span> - Natif bil hoque</p>
      </div>
      <p className="read-the-docs">
        Enhance Your Career Through Skill Development
      </p>
    </>
  )
}

export default App
