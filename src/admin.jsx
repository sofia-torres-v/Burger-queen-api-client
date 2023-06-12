import Logo from '../../assets/12.png';

export default function Admin() {

    return (
        <>
        <section className="global-container">

            <div className='container-columns container'>

                {/* columna 1 */}
                <div className='column-header'>
                    <h1>Buguer Queen</h1>
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
                            <p id='messageError'>mensaje</p>
                        </div>
                            
                        <div className='group'>
                            <input className='inp'
                                id="password"
                                placeholder="*********"
                                type="password"
                                name="password"
                            />
                            <p id='messageError'>mensaje</p>
                        </div>
                            
                        <button type="submit" className='btn'>Sign in</button>   
                    </form>
                </div>
                {/* final columna 2 */}

            </div>
        </section>
        </>
    );
}
