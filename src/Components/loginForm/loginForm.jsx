import React from 'react';
import './loginForm.css';


const LoginForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin} ) => {

    return (
 
      <form className="login-form">
        <h2>Login</h2>
          <div className="group">
            <input
              className="inp"
              id="email"
              placeholder="example@example.com"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          
            <input
              className="inp"
              id="password"
              placeholder="*********"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

            {/* <p id="messageError" data-testid="message-Error">{errorMessage}</p> */}
            {errorMessage && <p id="messageError" data-testid="message-Error">{errorMessage}</p>}

          <button onClick={handleLogin} type="submit" className="btn">
            Sign in
          </button> 
      </form>
    );
  };
  

export default LoginForm;