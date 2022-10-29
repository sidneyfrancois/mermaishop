import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import DetalhesProdutos from "./pages/DetalhesProdutos";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetalhesProdutos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
