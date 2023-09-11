import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        handleLogin();
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred during login');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={handleUsernameChange}
    />
  </div>
  <div>
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={handlePasswordChange}
    />
  </div>
  {error && <p>{error}</p>}
  <button type="submit">Login</button>
</form>

    </div>
  );
};

export default LoginForm;
