import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Gallery from "../components/pages/Gallery";
import Product from "../components/pages/Product";
import Cart from "../components/pages/Cart";
import Login from "../components/Login Signup/Login";
import Signup from "../components/Login Signup/Signup";
import Checkout from "../components/common/Checkout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/products" element={<Product />} />
        <Route path="/product" element={<Product />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;