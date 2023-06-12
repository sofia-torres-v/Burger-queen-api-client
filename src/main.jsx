import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Components/route/route.jsx';
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </React.StrictMode>,
)
