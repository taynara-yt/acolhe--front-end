import styles from './Sobre.module.css'

function Sobre(){
    return(
        
        
      
        <div >
   
             <h2 className={styles.titulo}>Sobre o Acolhe+</h2>
              <p className={styles.para}>O Brasil e vários países ao redor do mundo, estão enfrentando diversas crises, geradas pela mudança de rotina neste período, devido a pandemia causada pelo vírus SARS-CoV-2.</p>

              <p className={styles.para}> Dentre as orientações médicas fundamentais recomendadas à população, para prevenção contra este agente infeccioso, são necessários: lavar frequentemente as mãos e utilizar álcool em gel para higienização, usar máscaras, cobrir o nariz e a boca ao tossir ou espirrar para evitar possível propagação da doença e, principalmente, cumprir quarentena domiciliar para a não-exposição ao vírus.</p>
             
              <p className={styles.para}>Infelizmente, várias pessoas sofrem com as consequências que a Covid-19 provocou, tais como, tristeza do isolamento, ansiedade, insegurança financeira, insônia, o luto, e entre outras aflições. Ficar em isolamento, longe dos amigos, família, cidade natal, rotina, afetam as pessoas emocionalmente e fisicamente, e muitos não sabem lidar com as situações, tendo medo ou vergonha de pedir amparo, conversar e principalmente, há dificuldades em encontrar ajuda.</p>
             
            <p className={styles.para}>Existem muitos projetos que atuam de forma gratuita e on-line, com o objetivo de ajudar, conversar, escutar pessoas que estão passando por dificuldades emocionais e também auxiliar aqueles que desejam saber como identificar, agir, quando alguém de sua família ou próximo a ele necessitam de apoio emocional.
                </p>
           
             <p className={styles.para}>Portanto, o propósito deste projeto, é manter um site com o objetivo de organizar e facilitar o atendimento assistencial e acolhimento psicológico, no intuito de dar apoio, levar conhecimento e compartilhar ajuda profissional.
               </p>
             
            <h2 className={styles.titulo}>Abragência</h2>

            <p className={styles.para}>
            O Acolhe+ está inicialmente voltado para o público-alvo de pessoas que necessitam de ajuda ou acolhimento durante a pandemia causada pela Covid-19. Tendo seu acesso possibilitado por meio da internet.  
            </p>
          
               <h2 className={styles.titulo}>Quem somos</h2>

            <p className={styles.para}>Somos uma equipe formada por alunos da Universidade Federal do Amazonas – UFAM, Madson Lemos, Rafael Guedes, Taynara Costa e Thiago Trindade. Tivemos a iniciativa em desenvolver o Acolhe+ para conectar pessoas que necessitam de cuidados e atenção com os profissionais que oferecem meios de ajudá-los.

            Esperamos que essa iniciativa seja uma fonte de apoio importante e te auxilie a lembrar que não está sozinho(a) e que há ajuda disponível.</p>
  
            <h2 className={styles.titulo}>Observações</h2>
               <p className={styles.para} >
               O site Acolhe+ não realiza atendimentos psicológicos, somente direciona para outras plataformas, ou outros meios, onde profissionais da área são responsáveis pelo atendimento.
               </p>
        </div>
        
        )
}

export default Sobre