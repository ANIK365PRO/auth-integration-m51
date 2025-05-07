import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Layouts/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Orders from './Orders/Orders.jsx';
import PrivetRoute from './Routes/PrivetRoute.jsx';
import Profile from './Profile/Profile.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

// export const AuthContext = createContext(null);
// const userInfo = {
//   email: ' potato@aluu.com',
// };

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      {
        path: 'orders',
        // Component: Orders
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContext value={userInfo}>
      <RouterProvider router={router} />
    </AuthContext> */}

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
