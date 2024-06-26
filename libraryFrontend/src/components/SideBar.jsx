import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const cadastro = ["Leitor", "Livro", "Administrador"];
  const agendamentos = ['Visualizar'];
  const emprestimos = ['Analisar'];
  const ferramentas = ['Trocar Senha'];
  return (
    <div className={styles.container}>
      <Link to={"/home"}>
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <nav className={styles.navbar}>
        <Dropdown title="Cadastro" items={cadastro} />
        <Dropdown title="Agendamentos" items={agendamentos} />
        <Dropdown title="Empréstimos" items={emprestimos} />
        <Dropdown title="Ferramentas" items={ferramentas} />
      </nav>
    </div>
  );
};

export default SideBar;
