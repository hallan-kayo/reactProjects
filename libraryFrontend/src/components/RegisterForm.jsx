/* eslint-disable react/prop-types */
import styles from "./RegisterForm.module.css";

const RegisterForm = ({ fields }) => {
  return (
    <div className={styles.formContainer}>
      <h1>Formulário de Cadastro</h1>
      <form className={styles.form}>
        {fields.map((fields, index) => (
          <div
            key={index}
            className={`${styles.labelInput} ${styles[`labelInput${fields.size}`]}`}
          >
            <label className={styles.label}>{fields.field}</label>
            <input type="text" className={styles.input} />
          </div>
        ))}
      </form>
    </div>
  );
};

export default RegisterForm;
