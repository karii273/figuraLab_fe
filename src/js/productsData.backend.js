const API_URL = "http://localhost:3000";

const productsData = {
  async getProducts() {
    const res = await fetch(`${API_URL}/products`);
    return await res.json();
  },

  async addProduct(prod) {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prod),
    });

    return await res.json(); // ← DEVOLVER PRODUCTO CREADO
  },

  async deleteProduct(id) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    return await res.json(); // ← DEVOLVER RESPUESTA
  },

  async updateProduct(id, newProd) {
    // Eliminamos ID duplicado del body
    const { id: _, ...prodSinId } = newProd;

    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prodSinId),
    });

    return await res.json(); // ← DEVOLVER PRODUCTO ACTUALIZADO
  },
};

export default productsData;
