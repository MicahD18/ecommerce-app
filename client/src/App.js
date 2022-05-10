import React, { Component, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Products from "./pages/Products";
import ViewProductPage from "./pages/ViewProductPage";
import CartPage from "./pages/CartPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [add, setAdd] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);

  const handleData = (name, price) => {
    setAdd(add + 1);
    console.log(add);
    setName(name);
    setPrice(price);
  };

  const handleCounter = (counter) => {
    setAdd(add + counter);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar itemAmount={add} />
        <Routes>
          <Route path="/" element={<Products addToCart={handleData} />} />
          <Route
            path="/viewProduct"
            element={
              <ViewProductPage
                addToCart={handleData}
                addTotal={handleCounter}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage name={name} price={price} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
