import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import Admi from './Admi.jsx';
import Registrase_App from './registrarse.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/admi', // 
    element: <Admi />,
  },
  {
    path: '/registrarse',
    element: <Registrase_App />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);