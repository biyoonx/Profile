import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

import RootLayout from './components/RootLayout/RootLayout';
import MainProfilePage from './pages/MainProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Navigate replace to={'cv'} />,
      },
      {
        path: 'cv',
        element: <MainProfilePage />,
      },
      {
        path: 'cover_letter',
        // element: <
      },
      {
        path: 'project',
        // element: <
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
