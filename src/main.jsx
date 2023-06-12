import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './route.jsx';
import { RouterProvider } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>,
)
