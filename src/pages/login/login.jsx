import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoBurger from '../../Components/logo/logo.jsx';
import '../../Components/logo/logo.css'
import LoginForm from '../../Components/loginForm/loginForm.jsx';
import '../../Components/loginForm/loginForm.css'
import './login.css';



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
      console.log(response)

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
        <LogoBurger />
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          errorMessage={errorMessage}
          handleLogin={handleLogin}
        />
    </section>
  );

};

export default Login;