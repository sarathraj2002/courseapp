import { useState } from 'react'
import {Home} from ''
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
