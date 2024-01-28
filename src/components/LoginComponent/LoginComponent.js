import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import './LoginComponent.css'

const LoginComponent = () => {
  const auth = AuthService();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.login({ username, password });
    if (auth.isAuthenticated()) {
      navigate('/home');
    }
  };

  return (
    <div className="form">
      <h1>Zaloguj się</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nazwa użytkownika"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Hasło"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
