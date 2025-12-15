import { useState, useEffect } from "react";

const getStoredProducts = () => {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
};

const setStoredProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export function useProducts() {
  const [products, setProducts] = useState(() => getStoredProducts());
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setStoredProducts(products);
  }, [products]);

  const addProduct = (product) => {
    setProducts((prods) => [
      ...prods,
      { ...product, id: Date.now(), price: Number(product.price) },
    ]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((prods) =>
      prods.map((p) =>
        p.id === id
          ? { ...p, ...updatedProduct, price: Number(updatedProduct.price) }
          : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prods) => prods.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    products: paginatedProducts,
    allProducts: products,
    addProduct,
    updateProduct,
    deleteProduct,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
