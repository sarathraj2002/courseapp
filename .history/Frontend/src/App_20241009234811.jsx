import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<H/>}></Route>
      </Routes>
    </>
  )
}

export default App
