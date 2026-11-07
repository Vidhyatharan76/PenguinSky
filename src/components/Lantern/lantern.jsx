import { motion } from "framer-motion";
import styles from "./lantern.module.css";

export default function LauchLantern({ message, author, color, startX,createdAt }) {
  const animationDuration = 18000;
  const now = Date.now();
  const elapsedTime = createdAt ? now - createdAt : 0;
  const progress = Math.min(elapsedTime / animationDuration,1);
  const remainingTime = Math.max(animationDuration - elapsedTime,0) /1000;
  const initialY = `-${progress * 110}vh`;

  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}          
      animate={{ 
        y: "-110vh", 
        x: [0, 20, -20, 15, 0], 
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        duration: remainingTime, 
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }}
      style={{ 
        "--lantern-color": color,
        left: `${startX}%`,
        borderColor: color
      }}
      className={styles.floatingLantern}
    >
      <p>{message}</p>
      <span>— {author}</span>
    </motion.div>
  );
}