import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.jsx'
import Waiter from './pages/waiter/waiter.jsx';
import Administrator from './pages/administrator/administrator.jsx';
import Cheff from './pages/cheff/cheff.jsx';


export default function route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/admin" element={<Administrator />} />
        <Route path="/cheff" element={<Cheff/>} />
      </Routes>
    </div>
  )
}




