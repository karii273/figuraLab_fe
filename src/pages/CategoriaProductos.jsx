import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import BackButton from "../components/BackButton";

export default function CategoriaProductos() {
  const { categoria } = useParams(); 
  const products = useProducts();  

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoria.toLowerCase()
  );

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Categoría: {categoria}</h2>
        <div className="row">
          {filtered.length === 0 && (
            <p className="text-muted">
              No hay productos en esta categoría.
            </p>
          )}

          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <BackButton/>
      <Footer />
    </>
  );
}
