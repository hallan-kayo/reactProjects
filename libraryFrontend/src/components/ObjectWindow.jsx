/* eslint-disable react/prop-types */
import Header from "./Header";
import Table from "./Table";
import styles from "./ObjectWindow.module.css";

import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const ObjectWindow = (props) => {
  return (
    <div className={styles.main}>
      <div>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Header title={props.title} />
        <div className={styles.box}>
          <div className={styles.menuTable}>
            <Link to={"/register"}>
              <button className={styles.register}>Inserir </button>
            </Link>
          </div>
          <Table
            rows={props.rows}
            columns={props.columns}
            rowsPerPageOptions={props.rowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};
export default ObjectWindow;
