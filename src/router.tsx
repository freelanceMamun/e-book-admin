import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/Home';
import Register from './pages/register';
import { DashboardLayout } from './layout/DashboardLayout';
import Books from './pages/books';
import AuthLayout from './layout/AuthLayout';
import CreatBook from './pages/creatBook';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,

    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        index: true,
      },
    ],
  },
  {
    path: '/dashboard',

    children: [
      {
        path: 'home',
        element: <HomePage></HomePage>,
      },
      {
        path: 'books',
        element: <Books></Books>,
      },
      {
        path: 'books/create',
        element: <CreatBook></CreatBook>,
      },
    ],
    element: <DashboardLayout />,
  },
]);
