import { use } from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
function App() {
  const [User, SetUser] = useState([]);
  useEffect(() => {
      fetch('/data.json')
      .then((r) => r.json())
      .then((data) => SetUser(data))
  }, [])
  return (
    <ul>User list
      {User.map((u, index) => (<li key={index}>{u.name} - {u.age}</li>))}
    </ul>
  )
}

export default App