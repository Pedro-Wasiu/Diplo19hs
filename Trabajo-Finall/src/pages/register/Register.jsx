import React from 'react';
import './Register.css'; // ✅ Vinculamos el CSS

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Registro</h2>
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
