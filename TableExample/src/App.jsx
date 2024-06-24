import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Table from "./components/Table";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

const [rows, setRows] = useState([
  {page: 'homepage', description: "This is the main page", status: 'Live'},
  {page: 'page 2', description: "This is the page 2", status: 'Draft'},
  {page: 'page 3', description: "This is the page 3", status: 'Error'},
  {page: 'page 4', description: "This is the page 4", status: 'Live'},
])

const handleAddRow = (row) => {
  setRows([...rows, row])
}

const handleDeleteRow = (targetRow)=>{
  setRows(rows.filter((_, index)=> index !== targetRow))
};

  return (
    <div className="main">
      <Table rows = {rows} deleteRow = {handleDeleteRow}/>
      <button
        className={"button"}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add
      </button>
      {modalOpen && <Modal closeModal = {()=> {
        setModalOpen(false)
        
      }}
      submit={handleAddRow}
      />}
    </div>
  );
}

export default App;
