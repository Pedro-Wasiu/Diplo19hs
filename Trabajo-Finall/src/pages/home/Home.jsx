import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import database from '../../config/firebase';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const collectionRef = collection(database, 'products');
      const snapshot = await getDocs(collectionRef);
      const productsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '1rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛒 Listado de Productos</h2>

      <Link to="/crear-producto">
        <button style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          marginBottom: '2rem'
        }}>
          ➕ Crear nuevo producto
        </button>
      </Link>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{product.description}</p>
              <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>💲 ${product.price}</p>
              {product.img && (
                <img src={product.img} alt={product.name} style={{
                  width: '100%',
                  borderRadius: '6px',
                  marginTop: '1rem'
                }} />
              )}
            </div>
            <Link
              to={`/product/${product.id}`}
              style={{
                marginTop: '1rem',
                textAlign: 'center',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '4px',
                display: 'block'
              }}
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
