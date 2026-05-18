import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password check (could be moved to backend later)
        if (password === 'flyadmin2024') {
            localStorage.setItem('isFlynaeroAdmin', 'true');
            navigate('/admin/actualites');
        } else {
            setError('Mot de passe incorrect');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <img src="/logo.png" alt="Flynaero" className="login-logo" />
                <h2>Accès Administration</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    {error && <p className="error-msg">{error}</p>}
                    <button type="submit" className="login-btn">Se connecter</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
