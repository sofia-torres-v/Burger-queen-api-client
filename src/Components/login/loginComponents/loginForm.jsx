import React from 'react';

const LoginForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin} ) => {
    return (
      <div className="column-form">
        <h2>Login</h2>
  
        <form className="login-form">
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
          </div>
  
          <div className="group">
            <input
              className="inp"
              id="password"
              placeholder="*********"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <p id="messageError">{errorMessage}</p>}
          </div>
  
          <button onClick={handleLogin} type="submit" className="btn">
            Sign in
          </button>
        </form>
      </div>
    );
  };
  

export default LoginForm;