import styles from './Home.module.css'
import hand from './../imagens/handshake-1830760_1920.jpg'
import Carrossel from '../layout/Carrossel'
import CarrosselReq from '../layout/CarrosselReq'

function Home(){
    return(
        <div>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div>
                        <h2 className={styles.titHome}> Conectando Pessoas</h2>
                        <p className={styles.paraHome}>Precisando de alguém para conversar ?
                            Aqui você encontrará contatos de
                            profissionais que estarão prontos para
                            acolher e oferecer apoio psicológico
                            graituito e on-line durante a pandemia
                            da COVID-19.
                        </p>
                    </div>
                    <img src={hand} alt="handshake" />
                </div>
            </section>
            {/*Carrossel{*/}
            <Carrossel></Carrossel>
            {/*<CarrosselReq></CarrosselReq>*/}
        </div>
    )
}

export default Home