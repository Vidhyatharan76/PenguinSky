import styles from "./launchbutton.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

export default function Button(){
	return(
		<>
		<button className = {styles.button}>
			<FontAwesomeIcon icon = {faWandMagicSparkles} /> Launch Latern
		</button>
		</>
	)
}