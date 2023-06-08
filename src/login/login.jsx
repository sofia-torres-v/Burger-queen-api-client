import './login.css'
import Logo from '../img/logoBlanco.png'

export default function Login() {
    return (
        <>     
        <h1> <img src={Logo} alt="logo" /></h1>       
                <div id="globalContainer">
                    <h2>Login</h2>
                    <form id="search-form" role="search">
                        {/* <label>Email</label> */}
                        <input
                            id="email"
                            aria-label="Enter email"
                            placeholder="example@example.com"
                            type="email"
                            name="emailq"
                        />
                        {/* <label>Password</label> */}
                        <input
                            id="password"
                            aria-label="Enter password"
                            placeholder="*********"
                            type="password"
                            name="password"
                        />
                    </form>
                    <button type="submit">Sign in</button>
                </div>
            <div id="detail"></div>
        </>
    );
}