import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/register" style={styles.link}>Registro</Link>
      <Link to="/login" style={styles.link}>Login</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ccc'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  }
};
