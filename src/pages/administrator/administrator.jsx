import Logo from '../../assets/12.png';
//const [token, setToken] = useState('');


export default function Administrator() {

    // const handleLogout = () => {
    //     // Eliminar el token del localStorage
    //     localStorage.removeItem('token');

    //     // Actualizar el estado del token en el componente
    //     setToken('');
    // };


    return (
        <>
            <section className="global-container">

                <div className='container-columns container'>

                    {/* columna 1 */}
                    <div className='column-header'>
                        <h1>ADMINISTRATOR</h1>
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
                                    name="emailq"
                                />

                            </div>

                            <div className='group'>
                                <input className='inp'
                                    id="password"
                                    placeholder="*********"
                                    type="password"
                                    name="password"
                                />

                            </div>

                            {/* <button onClick={handleLogout} type="submit" className='btn'>Cerrar sesión</button> */}
                        </form>
                    </div>
                    {/* final columna 2 */}

                </div>
            </section>
        </>
    );
}
