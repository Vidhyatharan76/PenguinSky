import { useState } from 'react';
import { Toaster } from 'sonner';
import { AnimatePresence } from "framer-motion";
import Button from "./components/Button/button.jsx" 
import Navbar from "./components/Navbar/Navbar.jsx";
import RenderBg from "./components/Background/Background.jsx";
import IntroOverlay from "./components/Intro/intro.jsx"
import './App.css';


function App() {

  const [hasEntered,setHasEntered] = useState(false);

  return (
    <>
    <AnimatePresence>
      {!hasEntered && (
        <IntroOverlay onEnter = {() => setHasEntered(true)}/>
      )}
  </AnimatePresence>
  <Toaster theme="dark" position="top-right" richColors />
  
  <Button/>
  <Navbar/>
  <RenderBg/>
  </>
)
}

export default App
