import { useState } from 'react';
import Button from "./components/Button/button.jsx" 
import Navbar from "./components/Navbar/Navbar.jsx";
import RenderBg from "./components/Background/Background.jsx";
import './App.css';


function App() {

  return (
    <>
     <Button/>
     <Navbar/>
     <RenderBg/>
    </>
  )
}

export default App
