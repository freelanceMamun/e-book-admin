import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/login';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);
