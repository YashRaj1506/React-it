import { useState } from 'react'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from "./pages/Home"
import Favorites from './pages/Favorties'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />

    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
