import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './pages/home.tsx'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Home />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </>
  </StrictMode>,
)