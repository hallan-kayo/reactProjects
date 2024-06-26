import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReaderRegister from "./pages/ReaderRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/readerRegister" element={<ReaderRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
