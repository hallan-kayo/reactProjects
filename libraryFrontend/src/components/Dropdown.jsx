import { useState } from "react";
import styles from "./SideBar.module.css";

useState;

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className={styles.dropdownbutton}>
        {title}
      </button>
      {isOpen && (
        <ul className={styles.drodownmenu}>
          {items.map((item, index) => (
            <li key={index} className={styles.dropdownitem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
