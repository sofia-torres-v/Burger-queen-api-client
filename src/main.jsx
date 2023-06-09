import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
import Login from './login/login.jsx'
import Mesa from './mesa/mesa.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/mesa", element: <Mesa /> },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
