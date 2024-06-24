import { useState } from "react";
import styles from "./Modal.module.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ closeModal, submit }) => {
  const [newRow, setNewRow] = useState({
    page: "",
    description: "",
    status: "Live",
  });

  const handleChange = (e) => {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    submit(newRow)
    closeModal()
  }

  return (
    <div
      className={`${"modalContainer"} ${styles.modalContainer} `}
      onClick={(e) => {
        if (e.target.className == `modalContainer`) closeModal();
      }}
    >
      <div className={styles.modal}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="page">Page</label>
            <input name={"page"} value={newRow.page} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              name={"description"}
              value={newRow.description}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select
              name={"status"}
              value={newRow.status}
              onChange={handleChange}
            >
              <option value="Live">Live</option>
              <option value="Draft">Draft</option>
              <option value="Error">Error</option>
            </select>
          </div>

          <button
            type="submit"
            className={"button"}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
