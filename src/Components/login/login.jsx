import '../login/login.css'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/12.png';
// import Route from '../../route.jsx';


export default function Login() {
    // const navigate = Routes;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setToken] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault()
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
                const accessToken = data.accessToken;
                // Guardar el token en el localStorage
                localStorage.setItem('token', accessToken);
                console.log(accessToken)
                // Actualizar el estado del token en el componente
                setToken(accessToken);
                // se esta probando la navegación 
                // Route('/waiter');
            } else {
                // Manejar el caso si el inicio de sesión es incorrecto
                console.log('Inicio de sesión fallido');
            }
        } catch (error) {
            // Manejar errores de conexión o solicitud
            console.log('Error:', error);
        }
    };



    return (
        <>
            <section className="global-container">

                <div className='container-columns container'>

                {/* columna 1 */}
                <div className='column-header'>
                    <h1>BURGER QUEEN</h1>
                    <figure className='content-logo'>
                        <img src={Logo} alt="logo" />
                    </figure>
                </div> 
                {/* fin column 1 */}
                

                    {/* columna 2 */}
                    <div className='column-form'>
                        <h2>Login</h2>

                        <form className="login-form">
                            <div className='group'>
                                <input className='inp'
                                    id="email"
                                    placeholder="example@example.com"
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p id='messageError'>mensaje</p>
                            </div>

                            <div className='group'>
                                <input className='inp'
                                    id="password"
                                    placeholder="*********"
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <p id='messageError'>mensaje</p>
                            </div>

                            <button onClick={handleLogin} type="submit" className='btn'>Sign in</button>
                        </form>
                    </div>
                    {/* final columna 2 */}

                </div>
            </section>
        </>
    );
}
