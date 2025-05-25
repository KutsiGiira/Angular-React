import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  function Change(e){
    setName(e.target.value)
  }
  return (
    <>
        <input type="text" name='inp' onChange={Change} value={name} />
        <p>{name}</p>
    </>
  )
}

export default App
