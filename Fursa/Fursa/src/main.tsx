import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FursaApp from './fursa-app.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FursaApp />
  </StrictMode>,
)
