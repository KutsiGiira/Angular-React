import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
document.body.scrollTop = 500;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
