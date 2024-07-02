import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReaderRegister from "./pages/ReaderRegister";
import ReaderWindow from "./pages/ReaderWindow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/readerRegister" element={<ReaderWindow />} />
          <Route path="/register" element={<ReaderRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
