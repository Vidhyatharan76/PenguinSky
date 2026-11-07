import { ref, push,onValue,remove } from "firebase/database";
import { db } from "/src/firebase.js"
import styles from "./launchbutton.module.css";
import { useState, useEffect } from "react";
import { toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles,faXmark } from '@fortawesome/free-solid-svg-icons';
import LauchLantern from "../Lantern/lantern.jsx"
import {Filter} from 'bad-words';

export default function Button(){
       const filter = new Filter();
	const getStableRandom = (id, min, max) => {
		let hash = 0;
		for (let i = 0; i < id.length; i++) {
			hash = id.charCodeAt(i) + ((hash << 5) - hash);
		}
		const normalized = (Math.abs(hash) % 1000) / 1000;
		return min + normalized * (max - min);
	};

	const lanternRef = ref(db, "lanterns");

	const [lanterns, setLanterns] = useState([]);
	const [showPopup, setPopup] = useState(false);
	const [formData,setFormData] = useState({
		message:"",
		color:"#ff9f43",
		author:""
	})

	const handleChange = (e)=>{
		const { name, value } = e.target;
		setFormData((prevData) => ({...prevData,[name]: value}))
	}

	const showNHidePopup =() =>{
		setPopup(!showPopup);
	}

	const launch = () =>{
		setPopup(false)
             
		if(formData.message && !filter.isProfane(formData.message)){

			const lantern = {
				message:formData.message,
				author:formData.author ? formData.author : "Anonymous",
				color:formData.color,
				createdAt: Date.now()
			}

			push(lanternRef,lantern)

			setFormData({
				message:"",
				color:"#ff9f43",
				author:""
			})
			toast.success('Your lantern has soared into the night sky! 🏮');
		}
		else{
			toast.error("Please provide a message without inappropriate language");
		}

	}

	useEffect(() =>{
		const unsub = onValue(lanternRef, (snapshot) =>{
			const data = snapshot.val();
		const now = Date.now();
		const maxAge = 20000;

			if(data){
				const transformedArr = Object.entries(data).map(([id, value]) => ({
					id,
					...value
				})).filter((item) =>{
					if(now - item.createdAt > maxAge){
                                         remove(ref(db, `lanterns/${item.id}`));
					      return false;
					}
					return true;
				})

				setLanterns(transformedArr)
			}                      
		})
		return () => unsub();
	},[])


	return(
		<>
		<button className = {styles.button} onClick = {() => (setPopup(!showPopup))}>
			<FontAwesomeIcon icon = {faWandMagicSparkles} /> Launch Lantern
		</button>

		{showPopup && (
			<div className = {styles.popup}>
				<button className = {styles.closeBtn} onClick = {showNHidePopup}> <FontAwesomeIcon icon={faXmark} /></button>
				<div className = {styles.form}>
					<h1><FontAwesomeIcon icon = {faWandMagicSparkles} /> Launch Lantern</h1>
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

					<div className = {styles.btnDiv}>
						{['#ff9f43', '#ff5252', '#ffd32a', '#0fb9b1'].map((c) => (
							<button
								key={c}
								type="button"
								onClick={() => setFormData((prev) => ({ ...prev, color: c }))}
								style={{ backgroundColor: c }}
								className = {`${formData.color === c ? styles.activeColor : ''}`}
								/>
								))}
					</div>

					<button type="submit" onClick = {launch}>Release into the Sky 🏮</button>
				</div>
			</div>
			)}
		<div className="sky-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', pointerEvents: 'none' }}>
			{
				lanterns.map((item,index) =>{
					const total = lanterns.length;
					
					const slotWidth = 75 / Math.max(total, 1);
					const slotStart = 12 + (index * slotWidth);
					
					const safeX = getStableRandom(item.id, slotStart, slotStart + slotWidth - 5);
					return (
						<LauchLantern key = {item.id} message={item.message} author={item.author} color={item.color} startX={safeX} createdAt={item.createdAt}/>
					)
				})
			}
		</div>
		</>
	)
}