import React, { useState } from 'react';
import { BrowserRouter as Navigate } from 'react-router-dom';
import axios from 'axios';

const LoginAPI = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/login', {
      username,
      password,
    })
      .then((response) => {
        console.log(response);
        // Redirect to the AdminPage component
        Navigate("/AdminPage", { replace: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginAPI;
