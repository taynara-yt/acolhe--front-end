import styles from './Login.module.css'


function Login(){
    return(
        <div>
            <main className={styles.login}/>

                <div className={styles.login_box}>
                <h2 className={styles.login_title}>Login</h2>

                <form className={styles.login_form} name="form" method="POST"></form>

                <div className ={styles.user_box}>
                <input className={styles.login_cpf} type="text" name="user"/>
                <label>Usuário</label>
            </div>

            <div className={styles.user_box}>
                <input className={styles.login_senha} type="password" />
                <label>Senha</label> 
            </div> 

            <div className={styles.user_box}>
                <button className={styles.login_submit}>Entrar</button> 

                 </div>
            </div>
        </div>

    )
}

export default Login