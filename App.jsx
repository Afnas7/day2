import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Record from './components/Record'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 id="id1">welcome to react</h1>
    <View/>
   <Record/>
    </>
  )
}

export default App
