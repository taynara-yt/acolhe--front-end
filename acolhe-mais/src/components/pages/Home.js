import styles from './Home.module.css'
import hand from './../imagens/handshake-1830760_1920-300x232.jpg'

function Home(){
    return(
       
        <section className={styles.hero}>
        <div className={styles.container}>
            <div>
                <h2>
                    Conectando Pessoas
                </h2>
                <p class="text-justify text-reset">Precisando de alguém para conversar ?
                    Aqui você encontrará contatos de
                    profissionais que estarão prontos para
                    acolher e oferecer apoio psicológico
                    graituito e on-line durante a pandemia
                    da COVID-19.</p>
            </div>
           
            <img src={hand} alt="handshake" />
        </div>
    </section>
       
      
        )
}

export default Home