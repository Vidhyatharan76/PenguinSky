import styles from "./Navbar.module.css"

export default function Navbar(){
    return (
    	<>
    	<nav className ={styles.navBar}>
    		<h1 className= {styles.title}>PenguinSky</h1>
            <div className = {styles.liveIndicator}>
                <p className = {styles.liveText}>Live</p>
                <span className = {styles.dot}></span>
            </div>
    	</nav>
    	</>
    )
}