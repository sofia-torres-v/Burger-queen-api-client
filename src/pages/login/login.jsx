import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Header from '../../Components/header/header';
import LoginForm from '../../Components/loginForm/loginForm';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('* These fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.user.role === 'waiter') {
          navigate('/waiter');
        } else if (data.user.role === 'admin') {
          navigate('/admin');
        }

        const accessToken = data.accessToken;

        try {
          localStorage.setItem('token', accessToken);
        } catch (error) {
          // setErrorMessage('Error al guardar el token');
        }
      } else {
        setErrorMessage('Oops! That username and password combination is incorrect. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Oops!, something went wrong, please reload.');
    }
  };

  return (
    <section className="global-container">
      <div className="container-columns container">
        <Header />
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          errorMessage={errorMessage}
          handleLogin={handleLogin}
        />
      </div>
    </section>
  );
};
export default Login;
