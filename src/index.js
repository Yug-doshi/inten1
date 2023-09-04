import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import RegistrationForm from './RegistrationForm';
import Todo from "./Todo";
import User_api from './user_api';
import Product from './Product';
import Smartphone_product from  "./category/Smartphone_product";
import LaptopItemCategory from "./category/LaptopItemCategory";
import FragrancesItemCategory from "./category/FragrancesItemCategory";
import SkincareItemCategory from "./category/SkincareItemCategory";
import GroceriesItemCategory from "./category/GroceriesItemCategory"; 
import FurnitureItemCategory from "./category/FurnitureItemCategory";
import Contact_Jainam from "./Contact_Jainam";
import { CartProvider } from "./CartContext";
import Cart from './cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/myregister",
    element: <RegistrationForm />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/alluser",
    element: <User_api />,
  },
  {
    path: "/smartphone",
    element: <Smartphone_product />,
  },
  {
    path: "/laptops",
    element: <LaptopItemCategory />,
  },
  {
    path: "/fragrances",
    element: <FragrancesItemCategory />,
  },
  {
    path: "/skincare",
    element: <SkincareItemCategory />,
  },
  {
    path: "/groceries",
    element: <GroceriesItemCategory />,
  },
  {
    path: "/furniture",
    element:<FurnitureItemCategory/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/jainam",
    element:<Contact_Jainam/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
