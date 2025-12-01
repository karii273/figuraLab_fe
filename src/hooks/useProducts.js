import { useEffect, useState } from "react";
import productsData from "../js/productsData.backend";

export function useProducts(limit = null) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const list = await productsData.getProducts();
      setProducts(limit ? list.slice(0, limit) : list);
    }
    load();
  }, [limit]);

  return products;
}
