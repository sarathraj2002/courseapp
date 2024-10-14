import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
