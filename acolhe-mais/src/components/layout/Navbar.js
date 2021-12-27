import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../img/AcolheIcon-150x150.jpg'

function Navbar (){
    return(
       
        <nav>
           
                <Link to ="/">
                    <img src={logo} alt ="Acolhe+"/>
                </Link>
               
           <ul className={styles.list}>
               <li className={styles.item}>
               <Link to ="/">Home</Link>
               </li>
               <li className={styles.item}>
               <Link to ="/plataforma">Plataformas</Link>
               </li>
               <li className={styles.item}>
               <Link to ="/sobre">Sobre</Link>
              
               </li>
              
           </ul>
          
        </nav>
      
    )
}

export default Navbar