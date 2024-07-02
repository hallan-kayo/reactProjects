/* eslint-disable react/prop-types */
import RegisterForm from "./RegisterForm";
import SideBar from "./SideBar";

import Header from "./Header";
import styles from "./RegisterWindow.module.css";

const RegisterWindow = ({titleWindow, fieldsForm}) => {

  return (
    <div className={styles.main}>
      <div>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Header title={titleWindow} />
        <RegisterForm fields={fieldsForm} />
      </div>
    </div>
  );
};

export default RegisterWindow;
