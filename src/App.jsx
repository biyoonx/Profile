import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

import RootLayout from './components/RootLayout/RootLayout';
import CVPage from './pages/CVPage';
import CoverLetterPage from './pages/CoverLetterPage';
import ProjectPage from './pages/ProjectPage';

const router = createBrowserRouter([
  {
    path: '/Profile',
    element: <RootLayout />,
    errorElement: <Navigate replace to={'cv'} />,
    children: [
      {
        path: '',
        element: <Navigate replace to={'cv'} />,
      },
      {
        path: 'cv',
        element: <CVPage />,
      },
      {
        path: 'cover_letter',
        element: <CoverLetterPage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
