import Login from '../pages/login/login';
import Waiter from '../pages/waiter/waiter';
import Administrator from '../pages/administrator/administrator';
import { Routes, Route } from 'react-router-dom';

export default function route() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/waiter" element={<Waiter />} />
                <Route path="/admin" element={<Administrator />} />
            </Routes>
        </div>
    )
}




