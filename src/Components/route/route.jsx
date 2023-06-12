import Login from '../login/login.jsx';
import Waiter from '../waiter/waiter.jsx';
import Administrator from '../administrator/administrator.jsx';
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


