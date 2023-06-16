import { useNavigate } from 'react-router-dom';
import out from '../../assets/out.png';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/');
    };

    return (
        <div className='btn-logout-container'onClick={logout}>
            <figure>
                <img src={out} className='out' alt="logo"/>
            </figure>
            {/* <button className="btn-logout" >
                Logout
            </button> */}
        </div>
    );
};

export default Logout;