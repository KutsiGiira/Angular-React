import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Comps/header'
import Footer from './Comps/footer'
import Body from './Comps/body'
import './Comps/index.css'
function App() {

  return (
    <main className="container">
      <Header />
      <Body  />
      <Footer />
    </main>
  )
}

export default App
