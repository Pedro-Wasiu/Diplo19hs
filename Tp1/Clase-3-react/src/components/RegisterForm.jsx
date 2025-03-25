import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <h1>Crear Cuenta</h1>
      <p>Ingresa su información</p>

      <form>
        <div className="name-fields">
          <div className="input-group">
            <label>Nombre</label>
            <input type="text" placeholder="Pedro" />
          </div>

          <div className="input-group">
            <label>Apellido</label>
            <input type="text" placeholder="Lopez" />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="PedroReact@gmail.com" />
        </div>

        <div className="input-group">
          <label>Teléfono</label>
          <input type="tel" placeholder="+54 345 6789972" />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="input-group">
          <label>Confirmar Contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;