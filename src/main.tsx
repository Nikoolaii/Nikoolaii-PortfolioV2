import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './views/projects.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
