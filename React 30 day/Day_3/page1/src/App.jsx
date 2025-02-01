import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Html from './Pics/html.png'
import css from './Pics/css.png'
import js from './Pics/jss.png'
import react from './Pics/react.png'
function App() {
  const Test = <h3>Front end technologies</h3>
  return (
    <>
    <span>{Test}</span>
      <div>
        <img src={Html} alt="Html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
      </div>

    </>
  )
}
export default App
