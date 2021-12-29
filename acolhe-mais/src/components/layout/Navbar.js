import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../img/AcolheIcon-150x150.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar (){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container border-bottom">
                    <Link class="navbar-brand" to="/">
                        <img src={logo} alt="Acolhe+ Logo" width="45" height="100" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className={styles.item}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/plataformas">Plataformas</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/sobre">Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar