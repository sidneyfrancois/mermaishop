import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import DetalhesProdutos from "./pages/DetalhesProdutos";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetalhesProdutos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
