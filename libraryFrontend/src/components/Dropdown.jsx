/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ title, items, links }) => {
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
              <Link to={links[index]} style={{ textDecoration: "none", color: "black" }}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
