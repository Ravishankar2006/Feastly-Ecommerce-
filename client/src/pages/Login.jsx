import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.', err);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Email/ phone no"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        <a href="/signup" style={styles.signup}>Signup</a>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '2rem'
  },
  input: {
    padding: '1rem',
    width: '300px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    fontSize: '1rem'
  },
  button: {
    padding: '0.8rem 2rem',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  signup: {
    color: '#00bfff',
    textDecoration: 'none',
    marginTop: '1rem'
  }
};

export default Login;
