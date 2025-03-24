import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome name="John" />
      <Welcome name="Sarah" />
    </>
  )
}

export default App
