import { useState } from 'react'
function App() {
const [hover, isHovered] = useState(false);
const [pos, setPos] = useState({x: 50, y: 50})
  function Hover(){
    isHovered(true);
    let setX = Math.floor(Math.random() * 90)
    let setY = Math.floor(Math.random() * 93)
    setPos({x: setX, y: setY})
  }
  function Left(){
    isHovered(false);
  }
  return (
    <>
    <h1 style={{position: "absolute" , left: "40%"}} >Do u love me ? </h1>
        <button onMouseEnter={Hover} onMouseLeave={Left} style={{position: "absolute" , left: `${pos.x}%`, top:`${pos.y}%`}}><h1>no</h1></button>
        <button  style={{position: "fixed" , left: "45%", top: "45%"}} onClick={() => alert("good boy")}><h1>Yes</h1></button>
    </>
  )
}
export default App
