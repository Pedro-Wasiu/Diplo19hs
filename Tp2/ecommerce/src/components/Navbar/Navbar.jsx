import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <span>🛍️</span> MiEcommerce
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>Inicio</Link>
        <Link to="/auth" className={styles.link}>Login/Registro</Link>
      </div>
    </nav>
  );
}