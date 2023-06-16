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
            <figure className='box-out'>
                <img src={out} className='out' alt="logo"/>
                {/* <p className='text-out'>Logout</p> */}
            </figure>
        </div>
    );
};

export default Logout;