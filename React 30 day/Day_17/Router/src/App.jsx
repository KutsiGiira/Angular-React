import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>About</NavLink>
      <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contact</NavLink>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;