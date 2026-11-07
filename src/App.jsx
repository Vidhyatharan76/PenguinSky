import { useState } from 'react';
import { Toaster} from 'sonner';
import Button from "./components/Button/button.jsx" 
import Navbar from "./components/Navbar/Navbar.jsx";
import RenderBg from "./components/Background/Background.jsx";
import './App.css';


function App() {

  return (
    <>
    <Toaster theme="dark" position="top-right" richColors />
     <Button/>
     <Navbar/>
     <RenderBg/>
    </>
  )
}

export default App
