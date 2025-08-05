// src/App.jsx
import { useState } from 'react'
import './App.css'
import config from './config' // Import the config
import LandingPage from './components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage apiConfig={config} />
    </>
  )
}

export default App
