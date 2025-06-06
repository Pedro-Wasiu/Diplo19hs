import React, { useState } from 'react';
import database from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

const CreateProductScreen = () => {
  const initial_state_form = {
    name: '',
    description: '',
    price: 0,
  };

  const [form_state, setFormState] = useState(initial_state_form);

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Imagen fija desde ImgBB (pelota de fútbol)
    const url_img = 'https://i.ibb.co/Y7H0sK6/pelota-futbol.jpg';

    const collection_ref = collection(database, 'products');
    await addDoc(collection_ref, {
      name: form_state.name,
      description: form_state.description,
      price: parseFloat(form_state.price),
      img: url_img,
    });

    alert('✅ Producto creado exitosamente');
    setFormState(initial_state_form);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Crea tu producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            id='name'
            value={form_state.name}
            onChange={handleChange}
            placeholder='Ej: Pelota Adidas'
            required
          />
        </div>
        <div>
          <label htmlFor='description'>Descripción</label>
          <input
            type='text'
            name='description'
            id='description'
            value={form_state.description}
            onChange={handleChange}
            placeholder='Ej: Pelota oficial del mundial'
            required
          />
        </div>
        <div>
          <label htmlFor='price'>Precio</label>
          <input
            type='number'
            name='price'
            id='price'
            min={0}
            value={form_state.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Crear Producto</button>
      </form>
    </div>
  );
};

export default CreateProductScreen;

