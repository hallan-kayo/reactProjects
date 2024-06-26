import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <img className={styles.logoImage} src={logo} alt="logo" />
        <h1>BiblioSync</h1>
        <p className={styles.text}>
          Bem-vindo ao nosso sistema de gerenciamento de biblioteca! Cadastre
          livros, usuários e controle empréstimos de maneira simples e
          eficiente. Facilite o acesso à informação com a nossa plataforma
          intuitiva.
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.loginContainer}>
          <h1 className={styles.loginTitle}>Login</h1>
          <label className={styles.loginLabel}>
            <p className={styles.loginLabel}>Email</p>
            <input className={styles.input} type="text" />
          </label>
          <label className={styles.loginLabel}>
            <p className={styles.loginLabel}>Senha</p>
            <input className={styles.input} type="password" />
          </label>
          <div className={styles.buttonsLogin}>
            <Link to= {"/home"}>
              <button className={styles.loginButton}>Entrar</button>
            </Link>
            <p>Não possui cadastro?</p>
            <a href="">
              <p>Registre-se aqui</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
