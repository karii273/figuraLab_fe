import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useProducts } from "../hooks/useProducts";
import BackButton from "../components/BackButton";


export default function ProductDetail() {
  const { id } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <NavBar />
        <div className="container my-5">
          <h2 className="text-center">Producto no encontrado</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted">Categoría: {product.category}</p>
            <h4 className="mt-3">Precio: ${product.price}</h4>
            <p className="mt-2">Stock disponible: {product.stock}</p>
          </div>
        </div>
      </div>
      <BackButton/>
      <Footer />
    </>
  );
}