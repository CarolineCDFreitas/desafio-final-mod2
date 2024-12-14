import { Routes, Route } from "react-router-dom";
import Novidades from "./Components/Novidades/Novidades";
import Sobre from "./Components/Sobre/Sobre";
import Home from "./Components/Home/Home";

export default function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novidades" element={<Novidades />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
