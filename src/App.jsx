import { useState, useRef } from 'react';
import { Toaster } from 'sonner';
import interstellarAudio from "./assets/music.mp3";
import { AnimatePresence } from "framer-motion";
import Button from "./components/Button/button.jsx" 
import Navbar from "./components/Navbar/Navbar.jsx";
import RenderBg from "./components/Background/Background.jsx";
import IntroOverlay from "./components/Intro/intro.jsx"
import './App.css';


function App() {
  const musicRef = useRef(null);

  const [hasEntered,setHasEntered] = useState(false);

  const handleEnter = () => {
    if (musicRef.current) {
      musicRef.current.volume = 0.7;
      musicRef.current.play().catch((err) => console.log("Audio play error:", err));
    }
    setHasEntered(true);
  };

  return (
    <>
    <audio ref={musicRef} src={interstellarAudio} loop preload="auto" />
    <AnimatePresence>
      {!hasEntered && (
        <IntroOverlay onEnter={handleEnter}/>
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
