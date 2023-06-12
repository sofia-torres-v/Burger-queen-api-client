import Login from '../login/login.jsx';
import Waiter from '../waiter/waiter.jsx';
import Administrator from '../administrator/administrator.jsx';
import { createBrowserRouter } from "react-router-dom";


const Route = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/waiter", element: <Waiter /> },
    { path: "/admin", element: <Administrator /> },
  ]);

export default Route

