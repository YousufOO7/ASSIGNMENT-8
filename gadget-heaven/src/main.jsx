import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import ProductsCard from './components/ProductsCard/ProductsCard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Roots></Roots></div>,
    errorElement: <p className="text-4xl font-bold flex justify-center mt-52">Oooppppss Error: 404 page is not Found</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('../products.json'),
          },
          {
            path: "/category/:category",
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('../products.json')
          },
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/products.json'),
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../products.json')
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <ToastContainer   position="top-center"/>
  </StrictMode>,
)
