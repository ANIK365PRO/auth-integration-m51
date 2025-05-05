import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Layouts/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContext value={userInfo}>
      <RouterProvider router={router} />
    </AuthContext> */}
    <RouterProvider router={router} />
  </StrictMode>
);
