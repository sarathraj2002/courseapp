import { useState } from 'react'
import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element=
      </Routes>
    </>
  )
}

export default App
