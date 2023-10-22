import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;