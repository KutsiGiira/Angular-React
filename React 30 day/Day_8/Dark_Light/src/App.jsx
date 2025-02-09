import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header({style}){
  return(
    <header style={style}>
      <h1>Welcome to 30 days Of React</h1>
      <p>Getting Started React<br></br>Javacsripte library</p>
    </header>
  );
}
function Footer({style}){
  return(
    <footer style={style}>
      <div>Made by author</div>
    </footer>
  )
}
function App() {
  const [bgc, setColor] = useState("#0d1117")
  const [txt, setTxt] = useState("white")
  const [TopBot, setTB] = useState("#0d1117")
function theme(){
  let dark = "#0d1117"; let light = "white"; let blue = "rgb(0, 140, 255)"
  setColor(bgc === dark ? light : dark);
  setTxt(txt === dark ? light : dark);
  setTB(TopBot === dark ? blue : dark);
}
  return (
    <div style={{backgroundColor: bgc, color: txt}} className='main'>
    <Header style={{backgroundColor: TopBot}}></Header>
      <p className='body'>
        <button onClick={theme}>Change theme</button>
    </p>
    <Footer style={{backgroundColor: TopBot}}></Footer>
    </div>
  )
}

export default App
