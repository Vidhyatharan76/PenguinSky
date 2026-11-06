import styles from "./launchbutton.module.css";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

export default function Button(){

    const [showPopup, setPopup] = useState(false);
    const [formData,setFormData] = useState({
    	message:"",
    	color:"",
    	author:""
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData,[name]: value}))
    }

	return(
		<>
		<button className = {styles.button} onClick = {() => (setPopup(!showPopup))}>
			<FontAwesomeIcon icon = {faWandMagicSparkles} /> Launch Latern
		</button>

		{true && (
			<div className = {styles.popup}>
				<div className = {styles.form}>
					<h1><FontAwesomeIcon icon = {faWandMagicSparkles} /> Launch Latern</h1>
				  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Type what you wish to let go of or hope for..."
  />

  <input
    type="text"
    name="author"
    value={formData.author}
    onChange={handleChange}
    placeholder="Leave blank to stay Anonymous"
  />

  {['#ff9f43', '#ff5252', '#ffd32a', '#0fb9b1'].map((c) => (
    <button
      key={c}
      type="button"
      onClick={() => setFormData((prev) => ({ ...prev, color: c }))}
      style={{ backgroundColor: c }}
    />
  ))}

  <button type="submit">Release into the Sky 🏮</button>
				</div>
			</div>
			)}
		</>
	)
}