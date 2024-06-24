/* eslint-disable react/prop-types */
import styles from "./Table.module.css";

import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";

const Table = ({ rows, deleteRow }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Page</th>
            <th className={styles.expand}>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.page}</td>
                <td className={styles.expand}>{row.description}</td>
                <td>
                  <span
                    className={`${styles.label} ${
                      styles[`label${row.status}`]
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>
                  <span className={styles.actions}>
                    <BsFillTrashFill className={styles.deleteBtn} onClick={()=> deleteRow(index)}/>
                    <BsFillPenFill />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
