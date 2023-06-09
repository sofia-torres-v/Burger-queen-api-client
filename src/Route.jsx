import Login from './Components/login/login.jsx';
import Waiter from './Components/waiter/waiter.jsx';
import Administrator from './Components/administrator/administrator.jsx';
import { createBrowserRouter } from "react-router-dom";


const Route = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/waiter", element: <Waiter /> },
    { path: "/admin", element: <Administrator /> },
  ]);


  export default Route

