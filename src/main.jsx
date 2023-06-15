import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/login';
import Menu from './pages/waiter/waiter';
import Administrator from './pages/administrator/administrator';

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