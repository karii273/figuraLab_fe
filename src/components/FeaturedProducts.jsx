import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = useProducts(6); 

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Productos Destacados</h2>

      <div className="row">
        {products.length === 0 && (
          <p className="text-muted">No hay productos disponibles.</p>
        )}

        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-3">
        <a href="/categorias" className="btn btn-warning">
          Ver Catálogo Completo
        </a>
      </div>

    </div>
  );
}
