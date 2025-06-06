import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import database from '../config/firebase';

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
    <div>
      <h2>Listado de Productos</h2>

      <Link to="/crear-producto">
        <button>Crear nuevo producto</button>
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            {product.img && (
              <img src={product.img} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            )}
            <Link to={`/product/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
