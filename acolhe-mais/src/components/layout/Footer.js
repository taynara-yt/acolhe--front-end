import img from '../img/Allura-Trees-150x150.png'
import styles from './Footer.module.css'

function Footer (){
    return (
        <footer className={styles.footer}>
            <ul className={styles.copy}>
                <li>
                    <img src ={img} alt='Tree' />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Copyright</span> &copy; 2021 Acolhe+
                </p>   
        </footer>
    )

}
export default Footer