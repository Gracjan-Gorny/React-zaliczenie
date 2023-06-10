import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import facebook from './assets/facebook.png'
import gmail from './assets/gmail.png'
import youtube from './assets/youtube.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.gmail.com" target="_blank">
          <img src={gmail} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img src={youtube} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gracjan Górny</h1>
      <h2>113787</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          licznik {count}
        </button>
      </div>
    </>
  )
}

export default App
