import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import CartPage from "./views/CartPage";
import SuccessPage from "./views/SuccessPage";
import CheckOutPage from "./views/CheckOutPage";
import ProductPage from "./views/ProductPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
