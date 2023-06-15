import Login from '../pages/login/login.jsx'
import Waiter from '../pages/waiter/waiter.jsx';
import Administrator from '../pages/administrator/administrator.jsx';
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




