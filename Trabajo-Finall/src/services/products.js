// src/services/products.js
import { collection, getDocs } from "firebase/firestore";
import database from "../config/firebase";

export const getProducts = async () => {
  try {
    const productsRef = collection(database, "products");
    const result = await getDocs(productsRef);

    const products = result.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return products;
  } catch (error) {
    console.error(" Error fetching products:", error);
    return [];
  }
};

export const getProductById = async ({ product_id }) => {
  const products = await getProducts();
  return products.find(product => product.id === product_id);
};
