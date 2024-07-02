import RegisterWindow from "../components/RegisterWindow";

const ReaderRegister = () => {
  const fieldsForm = [
    { field: "Name", size: "Large" },
    { field: "Age", size: "Small" },
    { field: "Email", size: "Small" },
    { field: "Status", size: "Small" },
  ];
  return (
    <div>
      <RegisterWindow title={"Cadastro de Leitor"} fields={fieldsForm} />
    </div>
  );
};

export default ReaderRegister;
