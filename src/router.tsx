import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { HomePage } from './pages/Home';
import Register from './pages/register';
export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
