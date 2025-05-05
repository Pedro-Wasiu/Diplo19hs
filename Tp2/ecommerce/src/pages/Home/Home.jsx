import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=4")
            .then((res) => {
                setFeaturedProducts(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loading}>Cargando productos...</div>;
    }

    return (
        <div className={styles.homeContainer}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.heroContent}>
                    <h1>Bienvenido a MiEcommerce</h1>
                    <p>Descubre las mejores ofertas en moda y accesorios</p>
                    <button className={styles.shopButton}>Explorar Colección</button>
                </div>
            </section>

            {/* Featured Products */}
            <section className={styles.featuredSection}>
                <h2>Productos Destacados</h2>
                <div className={styles.productsGrid}>
                    {featuredProducts.map(product => (
                        <div key={product.id} className={styles.productCard}>
                            <Link to={`/product/${product.id}`} className={styles.productLink}>
                                <div className={styles.productImageContainer}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={styles.productImage}
                                    />
                                    <button 
                                        className={styles.quickView}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Vista rápida
                                    </button>
                                </div>
                                <div className={styles.productInfo}>
                                    <h3>{product.title}</h3>
                                    <p className={styles.productDescription}>
                                        {product.description.length > 100 
                                            ? `${product.description.substring(0, 100)}...` 
                                            : product.description}
                                    </p>
                                    <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                            <button 
                                className={styles.addToCart}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // Lógica para añadir al carrito
                                }}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            
        </div>
    );
};

export default Home;