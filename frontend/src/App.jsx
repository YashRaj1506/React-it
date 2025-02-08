import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from "./pages/Home"
import Favourites from './pages/Favorties'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />

    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Favorites" element={<Favourites />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
