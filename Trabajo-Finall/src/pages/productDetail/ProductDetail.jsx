import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../services/products";
import "./ProductDetail.css"; // Ruta corregida

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getProductById({ product_id: productId });
      setProduct(data);
    };
    fetch();
  }, [productId]);

  if (!product) return <p style={{ padding: "2rem" }}>Cargando producto...</p>;

  return (
    <div className="product-container">
      <h2>{product.name}</h2>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Descripción:</strong> {product.description || "No hay descripción."}</p>

      {product.img && (
        <img
          src={product.img}
          alt={product.name}
        />
      )}

      <Link to="/">← Volver a productos</Link>
    </div>
  );
}
