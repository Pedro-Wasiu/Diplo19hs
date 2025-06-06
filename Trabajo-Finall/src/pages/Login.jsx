import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Datos del login:', { email, password });

  
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br/>
        <input 
          type="password" 
          placeholder="Contraseña" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
