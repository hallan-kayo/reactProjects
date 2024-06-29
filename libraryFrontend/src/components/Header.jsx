import styles from "./Header.module.css";

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h2>usuario</h2>
      </div>
    </div>
  );
};

export default Header;
