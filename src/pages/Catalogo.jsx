import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import BackButton from "../components/BackButton";

export default function Catalogo() {
  const products = useProducts(); 

  return (
    <>
      <NavBar />

      <div className="container my-5">
        <h2 className="text-center mb-4">Catálogo Completo</h2>

        <div className="row">
          {products.length === 0 && (
            <p className="text-muted">No hay productos disponibles.</p>
          )}

          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <BackButton/>
      <Footer />
    </>
  );
}
