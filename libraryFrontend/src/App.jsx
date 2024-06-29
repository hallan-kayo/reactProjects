import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookRegister from "./pages/BookRegister";
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
          <Route path="/bookRegister" element={<BookRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
