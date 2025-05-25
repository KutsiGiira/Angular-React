import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const title = <h2>SUBSCRIBE</h2>
const sub = <p>Sign up with your email address to receive news and updates</p>
  return (
    <>
      <p>{title}</p>
      <p>{sub}</p>
      <div>
        <input type="text" name="" id="" placeholder='first name' /><input type="text" name="" id="" placeholder='last name' /><input type="text" name="" id="" placeholder='email' />
      </div>
      <button>{title}</button>
    </>
  )
}

export default App
