import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import {BrowserRouter} from 'rea'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowswerRouter>
    <App />
    </BrowswerRouter>
  </StrictMode>,
)