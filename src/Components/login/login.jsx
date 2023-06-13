import '../login/login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/12.png';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      console.log(errorMessage);
      setErrorMessage(errorMessage);
      return;
    }

    try {
      // console.log(JSON.stringify({ email, password }));
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      // console.log(response);

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
          setToken(accessToken);
        } catch (error) {
          // setErrorMessage('Error al guardar el token');
        }

      } else {
        setErrorMessage('Oops! That username and password combination is incorrect. Please try again.');
      }

    } catch (err) {
      console.log(err);
      setErrorMessage('Oops!, something went wrong, please reload.');
    }
  };



  return (
    <>
      <section className="global-container">
        <div className="container-columns container">
          {/* columna 1 */}
          <div className="column-header">
            <h1>BURGER QUEEN</h1>
            <figure className="content-logo">
              <img src={Logo} alt="logo" />
            </figure>
          </div>
          {/* fin column 1 */}

          {/* columna 2 */}
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
                {/* {errorMessage && <p id="messageError">{errorMessage}</p>} */}
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
          {/* final columna 2 */}
        </div>
      </section>
    </>
  );
}