import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Registro</Link>
        <Link to="/crear-producto" className="nav-link">Crear Producto</Link>
      </div>
    </nav>
  );
}
