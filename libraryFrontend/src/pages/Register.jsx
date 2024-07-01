import RegisterForm from "../components/RegisterForm";
import SideBar from "../components/SideBar";

import Header from "../components/Header";
import styles from "./Register.module.css";

const Register = () => {
  const fieldsForm = [
    { field: "Name", size: "Large" },
    { field: "Age", size: "Small" },
    { field: "Email", size: "Small" },
    { field: "Status", size: "Small" },
  ];

  return (
    <div className={styles.main}>
      <div>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Header title={"Cadastrar Leitor"} />
        <RegisterForm fields={fieldsForm} />
      </div>
    </div>
  );
};

export default Register;
