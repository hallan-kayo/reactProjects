/* eslint-disable react/prop-types */
import RegisterForm from "./RegisterForm";
import SideBar from "./SideBar";

import Header from "./Header";
import styles from "./RegisterWindow.module.css";

const RegisterWindow = (props) => {

  return (
    <div className={styles.main}>
      <div>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Header title={props.title} />
        <RegisterForm fields={props.fields} />
      </div>
    </div>
  );
};

export default RegisterWindow;
