import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useUser } from "../hooks/useUser";
import "../css/adminModal.css";

const API_URL = "http://localhost:3000";

export default function AdminProductos() {
  const { isAdmin } = useUser();
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const CATEGORIES = [
    "Anime",
    "Videojuegos",
    "Comics",
    "Pelicula",
    "Diorama",
    "+18",
  ];

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    img: "",
    category: "",
  });

  // -------------------------------------------
  // Cargar productos desde el backend
  // -------------------------------------------
  async function loadProducts() {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  // -------------------------------------------
  // Abrir modal Agregar
  // -------------------------------------------
  function openAddModal() {
    setIsEdit(false);
    setForm({
      id: "",
      name: "",
      price: "",
      stock: "",
      img: "",
      category: "",
    });
    setModalOpen(true);
  }

  // -------------------------------------------
  // Abrir modal Editar
  // -------------------------------------------
  function openEditModal(prod) {
    setIsEdit(true);
    setForm(prod);
    setModalOpen(true);
  }

  // -------------------------------------------
  // Eliminar (DELETE correcto)
  // -------------------------------------------
  async function handleDelete(id) {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    loadProducts();
  }

  // -------------------------------------------
  // Guardar cambios (PUT o POST)
  // -------------------------------------------
  async function handleSubmit(e) {
    e.preventDefault();

    const finalImg = form.img.trim() === "" ? "/img/reno.png" : form.img;

    const body = {
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
      img: finalImg,
      category: form.category,
    };

    // EDITAR
    if (isEdit) {
      await fetch(`${API_URL}/products/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }
    // AGREGAR
    else {
      await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    setModalOpen(false);
    loadProducts();
  }

  // -------------------------------------------
  // Vista si no es admin
  // -------------------------------------------
  if (!isAdmin) {
    return (
      <>
        <NavBar />
        <div className="container my-5">
          <h2 className="text-center text-danger">Acceso denegado</h2>
        </div>
        <Footer />
      </>
    );
  }

  // -------------------------------------------
  // Vista normal
  // -------------------------------------------
  return (
    <>
      <NavBar />

      <div className="container my-5">
        <div className="d-flex justify-content-between mb-4">
          <h2>Administración de Productos</h2>
          <button className="btn btn-success" onClick={openAddModal}>
            + Agregar Producto
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered shadow">
            <thead className="table-dark">
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img src={p.img} alt={p.name} width="70" />
                  </td>
                  <td>{p.name}</td>
                  <td>${p.price}</td>
                  <td>{p.stock}</td>
                  <td>{p.category}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => openEditModal(p)}
                    >
                      Editar
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(p.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-backdrop-custom">
          <div className="modal-card">
            <h4>{isEdit ? "Editar Producto" : "Agregar Producto"}</h4>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="form-control my-2"
                type="number"
                placeholder="Precio"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              <input
                className="form-control my-2"
                type="number"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
              />

              <input
                className="form-control my-2"
                type="text"
                placeholder="URL imagen"
                value={form.img}
                onChange={(e) => setForm({ ...form, img: e.target.value })}
              />

              <select
                className="form-control my-2"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="">Selecciona categoría</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <button className="btn btn-success mt-3 w-100">
                {isEdit ? "Guardar Cambios" : "Agregar Producto"}
              </button>

              <button
                type="button"
                className="btn btn-secondary mt-2 w-100"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
