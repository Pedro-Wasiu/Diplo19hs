import React from 'react';

export default function Register() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Nombre" required /><br />
        <input type="email" placeholder="Correo electrónico" required /><br />
        <input type="password" placeholder="Contraseña" required /><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}


