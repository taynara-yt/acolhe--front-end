import styles from './Sugestao.module.css'
import contact from './../imagens/Croods-Peaceful-Place.png'



function Sugestao(){
    return(
      <section className={styles.sugestao_container}>
      <h1>Mande sua sugestão</h1>
    <p>Conhece alguma instituição, grupo ou pessoa voluntária que deseja acolher ou apenas quer nos enviar dicas para melhorar o “Acolhe+”?</p>
    <button type="submit">Entre em contato</button>
      
      <img src={contact} alt="contato"/>

   </section>

    )  
}

export default Sugestao
