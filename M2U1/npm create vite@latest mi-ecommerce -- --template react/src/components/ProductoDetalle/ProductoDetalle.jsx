import React, { useState } from 'react';
import './ProductoDetalle.css';
import microondas from '../../assets/microondas.png';

const ProductoDetalle = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const comprar = () => {
    setMostrarMensaje(true);
  };

  return (
    <div className="contenedor-producto">
      <img src={microondas} alt="Microondas Samsung" className="imagen-producto" />
      
      <h2>Microondas Samsung mg23f3k3tak black 23lts</h2>
      
      <div className="precios">
        <p className="precio-anterior">$500.000</p>
        <span className="descuento">10% OFF</span>
      </div>
      
      <p className="precio-actual">$450.000</p>
      <p className="stock">Disponibles: 15 unidades</p>
      
      <button 
        className="boton-comprar" 
        onClick={comprar}
      >
        COMPRAR
      </button>
      
      {mostrarMensaje && (
        <p className="mensaje">Gracias por su compra</p>
      )}
    </div>
  );
};

export default ProductoDetalle;