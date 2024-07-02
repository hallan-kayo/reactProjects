/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

// eslint-disable-next-line react/prop-types
const Header = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <h2>usuario</h2>
      </div>
    </div>
  );
};

export default Header;
