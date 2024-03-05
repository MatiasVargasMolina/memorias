import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Signature from './components/Signature';
import Texto from './components/Texto';
function App() {


  return (
    <div className='flex flex-col'>
      <Home></Home>
    </div>
  )
}

export default App
