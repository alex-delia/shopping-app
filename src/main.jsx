import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "typeface-roboto";
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
