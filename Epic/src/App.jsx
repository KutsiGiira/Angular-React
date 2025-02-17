import { useEffect } from "react";
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Main from './Pages/Main'
import './grid.css'
function App() {
  return (
    <div className="layout">
      <Navbar className="navbar" />
      <Main />
      <Footer/>
    </div>
  )
}

export default App
