export default function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card product-card h-100 shadow-sm">
        <img
          src={product.img || "/img/default.png"}
          className="card-img-top"
          alt={product.name}
        />

        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>

          <p className="card-text text-muted">
            Stock: {product.stock}
          </p>

          <p className="fw-bold">${product.price}</p>

          <button
            className="btn btn-warning w-100"
            onClick={() => (window.location.href = `/producto/${product.id}`)}>
            Ver más
          </button>

        </div>
      </div>
    </div>
  );
}
