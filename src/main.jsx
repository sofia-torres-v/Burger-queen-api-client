import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/login/login.jsx';
import Menu from './Components/waiter/waiter.jsx';
import Administrator from './Components/administrator/administrator.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/waiter',
    element: <Menu />
  },
  {
    path: '/admin',
    element: <Administrator />
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;