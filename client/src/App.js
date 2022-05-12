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
  const [cartArray, setCartArray] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleData = (name, price) => {
    setAdd(add + 1);
    console.log(add);
    setName(name);
    setPrice(price);
  };

  const handleCounter = (counter) => {
    setAdd(add + counter);
  };

  const cartCallback = (name, price, count) => {
    count = name;
    cartArray.push(count, `$${price}`);
    console.log(name);
    setCartArray(cartArray);
    setClickCount(clickCount + 1);
    console.log(cartArray);
  };

  // add empty array

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar itemAmount={add} />
        <Routes>
          <Route
            path="/"
            element={
              <Products addToCart={handleData} cartCallback={cartCallback} />
            }
          />
          <Route
            path="/viewProduct"
            element={
              <ViewProductPage
                addTotal={handleCounter}
                addToCart={handleData}
                cartCallback={cartCallback}
              />
            }
          />
          <Route
            path="/cart"
            // pass empty array
            element={
              <CartPage name={name} price={price} cartArray={cartArray} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
