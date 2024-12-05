import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [userData, setUserData] = useState({ name: '', token: '' });

  const handleLogin = () => {
    login(userData.name, userData.token);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter token"
        value={userData.token}
        onChange={(e) => setUserData({ ...userData, token: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
