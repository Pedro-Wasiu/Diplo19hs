import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/crear-producto">Crear Producto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
