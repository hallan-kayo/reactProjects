import PropTypes from "prop-types";
import { useState } from "react";
import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import styles from "./Table.module.css";

// eslint-disable-next-line react/prop-types
const Table = ({ rows, columns, rowsPerPageOptions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]); // Inicialmente, usando o primeiro valor das opções

  // Calcular índices das linhas a serem exibidas
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // eslint-disable-next-line react/prop-types
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  // Calcular o número total de páginas
  // eslint-disable-next-line react/prop-types
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  // Função para mudar a página atual
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Função para mudar o número de linhas por página
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Resetar para a primeira página ao mudar o número de linhas por página
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              <td>
                <span className={styles.actions}>
                  <BsFillPenFill />
                </span>
              </td>
              <td>
                <span className={styles.actions}>
                  <BsFillTrashFill />
                </span>
              </td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        {/* Controles de Paginação */}
        <div className={styles.pageItem}>
          <span>Páginas: </span>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>

        {/* Selecionar número de linhas por página */}
        <div className={styles.rows}>
          <span>Linhas por página: </span>
          <select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
};

Table.defaultProps = {
  rowsPerPageOptions: [5, 10, 20],
};

export default Table;
