import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

export default function Auth() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isRegistering ? 'Registro exitoso (simulado)' : 'Login exitoso (simulado)');
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <div className={styles.authHeader}>
                    <h2>{isRegistering ? 'Registro' : 'Login'}</h2>
                    <div className={styles.logo}>🛒</div>
                    <p className={styles.subtitle}>
                        {isRegistering ? 
                            'Completa con tus datos para registrarte' : 
                            'Completa con tus datos para registrarte'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.authForm}>
                    {isRegistering && (
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nombre completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>
                    
                    {isRegistering && (
                        <div className={styles.formGroup}>
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                minLength="6"
                            />
                        </div>
                    )}
                    
                    <button type="submit" className={styles.submitButton}>
                        {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
                    </button>
                </form>

                <div className={styles.authFooter}>
                    <p>
                        {isRegistering ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
                        <button 
                            type="button"
                            onClick={() => setIsRegistering(!isRegistering)}
                            className={styles.toggleButton}
                        >
                            {isRegistering ? 'Inicia Sesión' : 'Regístrate'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}