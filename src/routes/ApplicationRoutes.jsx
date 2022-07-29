import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import Ondeencontrar from "../pages/Ondeencontrar/Ondeencontrar";
import Voluntarios from "../pages/Voluntarios/Voluntarios";
import Menu from "../components/Menu/Menu";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="Voluntarios" element={<Voluntarios />} />
        <Route path="Ondeencontrar" element={<Ondeencontrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
