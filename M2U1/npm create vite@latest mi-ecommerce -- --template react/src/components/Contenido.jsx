import React, { useState } from 'react';

const ProductoDetalle = () => {
  // Estado para controlar el mensaje de compra
  const [compraRealizada, setCompraRealizada] = useState(false);

  // Datos del producto (podrían venir de props o una API)
  const producto = {
    nombre: 'Smart TV 42" Sansel Android',
    modelo: 'TDS2442FICH',
    precioReal: 419999,
    precioFinal: 294999,
    disponible: 15,
    imagen: 'https://ejemplo.com/tv.jpg'
  };

  // Calcular porcentaje de descuento
  const porcentajeOferta = Math.round(
    ((producto.precioReal - producto.precioFinal) / producto.precioReal) * 100
  );

  // Estilos
  const estilos = {
    contenedor: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px'
    },
    imagen: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto'
    },
    precioReal: {
      textDecoration: 'line-through',
      color: '#666',
      marginRight: '10px'
    },
    precioFinal: {
      color: '#c00',
      fontSize: '1.5em',
      fontWeight: 'bold'
    },
    oferta: {
      color: 'green',
      fontWeight: 'bold'
    },
    boton: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1.1em'
    },
    mensaje: {
      color: 'green',
      marginTop: '10px'
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h1>{producto.nombre}</h1>
      <h3>{producto.modelo}</h3>
      
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        style={estilos.imagen} 
      />
      
      <div style={{ margin: '20px 0' }}>
        <span style={estilos.precioReal}>
          ${producto.precioReal.toLocaleString()}
        </span>
        <span style={estilos.oferta}>
          {porcentajeOferta}% OFF
        </span>
      </div>
      
      <div style={estilos.precioFinal}>
        ${producto.precioFinal.toLocaleString()}
      </div>
      
      <p>Disponibles: {producto.disponible}</p>
      
      <button 
        style={estilos.boton}
        onClick={() => setCompraRealizada(true)}
      >
        Comprar
      </button>
      
      {compraRealizada && (
        <p style={estilos.mensaje}>Gracias por su compra</p>
      )}
    </div>
  );
};

export default ProductoDetalle;