import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError('Error al cargar el producto');
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className={styles.loading}>Cargando producto...</div>;
    if (error) return <div className={styles.error}>{error}</div>;
    if (!product) return <div className={styles.notFound}>Producto no encontrado</div>;

    return (
        <div className={styles.productDetailContainer}>
            <div className={styles.productImageContainer}>
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className={styles.productImage}
                />
            </div>
            
            <div className={styles.productInfo}>
                <h1 className={styles.productTitle}>{product.title}</h1>
                
                <div className={styles.priceContainer}>
                    <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                    {product.price > 50 && (
                        <span className={styles.discountBadge}>¡Oferta especial!</span>
                    )}
                </div>
                
                <div className={styles.rating}>
                    {Array(Math.round(product.rating?.rate || 0)).fill().map((_, i) => (
                        <span key={i} className={styles.star}>★</span>
                    ))}
                    <span className={styles.ratingCount}>({product.rating?.count || 0} reseñas)</span>
                </div>
                
                <p className={styles.productDescription}>{product.description}</p>
                
                <div className={styles.actions}>
                    <button className={styles.buyButton}>Comprar ahora</button>
                    <button className={styles.cartButton}>Añadir al carrito</button>
                </div>
                
                <div className={styles.productMeta}>
                    <p><strong>Categoría:</strong> {product.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;