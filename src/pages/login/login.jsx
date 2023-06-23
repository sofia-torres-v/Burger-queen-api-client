import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoBurger from '../../Components/Logo/logo';
import '../../Components/logo/logo.css'
import LoginForm from '../../Components/loginForm/loginForm.jsx';
import '../../Components/loginForm/loginForm.css'
import './login.css';
import api from '../../api_client/api';



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
      const data = await api().login(email, password);
      console.log(data);
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

    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
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