import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";
import styles from "./SideBar.module.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const SideBar = () => {
  const cadastro = ["Leitor", "Livro", "Administrador"];
  const cadastroLinks = [
    "/readerRegister",
    "/bookRegister",
    "/cadastro-administrador",
  ];

  const agendamentos = ["Visualizar"];
  const agendamentosLinks = ["/visualizar-agendamentos"];

  const emprestimos = ["Analisar"];
  const emprestimosLinks = ["/analisar-emprestimos"];

  const ferramentas = ["Trocar Senha"];
  const ferramentasLinks = ["/trocar-senha"];

  const [isSideBarVisible, setIsSideBarVisible] = useState(true);

  const toggleSideBarVisible = () => {
    setIsSideBarVisible(!isSideBarVisible);
  };

  return (
    <div
      className={`${isSideBarVisible ? styles.sidebar : styles.sidebarHidden} ${
        styles.container
      }`}
    >
      <button
        onClick={toggleSideBarVisible}
        className={`${styles.buttonSideBar} ${
          isSideBarVisible
            ? styles.buttonSideBarVisible
            : styles.buttonSideBarHidden
        }`}
      >
        {isSideBarVisible ? (
          <BsArrowLeftCircleFill />
        ) : (
          <BsArrowRightCircleFill />
        )}
      </button>
      {isSideBarVisible && (
        <div>
          <Link to={"/home"}>
            <img src={logo} className={styles.logo} alt="logo" />
          </Link>

          <nav className={styles.navbar}>
            <Dropdown title="Cadastro" items={cadastro} links={cadastroLinks} />
            <Dropdown
              title="Agendamentos"
              items={agendamentos}
              links={agendamentosLinks}
            />
            <Dropdown
              title="Empréstimos"
              items={emprestimos}
              links={emprestimosLinks}
            />
            <Dropdown
              title="Ferramentas"
              items={ferramentas}
              links={ferramentasLinks}
            />
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideBar;
