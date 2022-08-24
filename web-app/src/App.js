import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import Quiz from './pages/quiz'

import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Quiz />} path="/quiz" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
