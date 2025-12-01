import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Catalogo from "./pages/Catalogo";
import Categorias from "./pages/Categorias";
import CategoriaProductos from "./pages/CategoriaProductos";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import AdminUsuarios from "./pages/AdminUsuarios";
import AdminProductos from "./pages/AdminProductos";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categoria/:categoria" element={<CategoriaProductos />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/admin/usuarios" element={<AdminUsuarios />} />
      <Route path="/admin/productos" element={<AdminProductos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
