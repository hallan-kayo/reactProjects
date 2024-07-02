import ObjectWindow from "../components/ObjectWindow";

const ReaderWindow = () => {
  const columns = [
    { header: "Id" },
    { header: "Name" },
    { header: "Age" },
    { header: "Email" },
    { header: "Status" },
  ];

  const rowsPerPage = [5, 10, 20];

  const rows = [
    {
      id: 1,
      name: "Alice Smith",
      age: 28,
      email: "alice.smith@example.com",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Bob Johnson",
      age: 34,
      email: "bob.johnson@example.com",
      status: "Inativo",
    },
    {
      id: 3,
      name: "Charlie Brown",
      age: 22,
      email: "charlie.brown@example.com",
      status: "Pendente",
    },
    {
      id: 4,
      name: "David Wilson",
      age: 30,
      email: "david.wilson@example.com",
      status: "Ativo",
    },
    {
      id: 5,
      name: "Emma Davis",
      age: 27,
      email: "emma.davis@example.com",
      status: "Inativo",
    },
    {
      id: 6,
      name: "Fiona Clark",
      age: 35,
      email: "fiona.clark@example.com",
      status: "Pendente",
    },
    {
      id: 7,
      name: "George Miller",
      age: 29,
      email: "george.miller@example.com",
      status: "Ativo",
    },
    {
      id: 8,
      name: "Hannah Martinez",
      age: 24,
      email: "hannah.martinez@example.com",
      status: "Inativo",
    },
    {
      id: 9,
      name: "Ian Anderson",
      age: 33,
      email: "ian.anderson@example.com",
      status: "Pendente",
    },
    {
      id: 10,
      name: "Judy Thompson",
      age: 26,
      email: "judy.thompson@example.com",
      status: "Ativo",
    },
  ];

  return (
    <>
      <ObjectWindow 
      title={"Leitor"}
      rows={rows}
      columns={columns}
      rowsPerPage={rowsPerPage}
      />
    </>
  );
};

export default ReaderWindow;
