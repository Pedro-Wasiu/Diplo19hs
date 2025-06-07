import React, { useState } from "react";
import "./CreateProductScreen.css";

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo producto:", { name, price, description, image });
    // Acá podrías llamar a un servicio que guarde el producto en Firebase, por ejemplo.
  };

  return (
    <div className="create-product-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
}
