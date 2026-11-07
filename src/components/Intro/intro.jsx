import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./intro.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
export default function IntroOverlay({ onEnter }) {
  

  const handlePlay = () =>{
     if(onEnter){
      onEnter();
    }
  }
  return (
    <>
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.overlay}
    >

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={styles.content}
      >
        <FontAwesomeIcon icon={faMoon} className={styles.moonIcon} />
        
        <span className={styles.diwaliSub}>✨ Happy Diwali ✨</span>
        
        <h1>Release Your Wishes</h1>
        <p>Type what you wish to let go of or hope for, and watch your lantern rise alongside others this Diwali</p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlay}
          className={styles.enterBtn}
        >
          Enter the Festival of Lights 
        </motion.button>
      </motion.div>
    </motion.div>
    </>
  );
}