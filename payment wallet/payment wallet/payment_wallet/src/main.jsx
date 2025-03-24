import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Counter from './Components/Counter.jsx'  // <-- Import the Counter component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login />
    <Register />
    <Counter /> {/* Render the Counter component */}
  </StrictMode>
)
