import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    const [def, sefDet] = useState("Loading...");
    let fullDate = new Date();
  useEffect(() => {
    let h = new Date().getHours();
    const f = [ "Morning" , "Noon", "Afternoon", "Night"];
    if(h >=0 && h <7){
      sefDet(f[3]);
    }
    else if(h >=7 && h <13){
      sefDet(f[0]);
    }
    else if(h >=13 && h < 18){
      sefDet(f[1]);
    }
    else{
      sefDet(f[2]);
    }
  }, [])
  return (
    <main>
      <h1>This is { def } </h1>
      <h2>{ fullDate.getHours()}:{ fullDate.getMinutes()}:{fullDate.getSeconds()} </h2>
    </main>
  )
}

export default App
