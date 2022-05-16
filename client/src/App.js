import React, { Component, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Products from "./pages/Products";
import ViewProductPage from "./pages/ViewProductPage";
import CartPage from "./pages/CartPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [add, setAdd] = useState(0);
  const [add2, setAdd2] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [cartArray, setCartArray] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  let [sum, setSum] = useState("");

  let count;

  const handleData = (name, price) => {
    setAdd(add + 1);
    console.log(add);
    setName(name);
    setPrice(price);
  };

  const handleCounter = (counter) => {
    count = counter;
    setAdd2(count);
    console.log(count);
  };

  // For Products
  const cartCallback = (name, price) => {
    cartArray.push({ name: name, price: price });
    setClickCount(clickCount + 1);
    console.log(cartArray);

    const newArray = [];

    cartArray.forEach((item, index) => {
      
      sum = cartArray[index].price;
      newArray.push(sum);
      const total = newArray.reduce((a, b) => {
        return a + b;
      });
      console.log(newArray);
      console.log(total);
      setSum(total);
    });
  };

  // For ViewProduct
  const cartCallback2 = (name, price) => {
    cartArray.push({ name: name, price: price });
    setClickCount(clickCount + 1);
    console.log(cartArray);

    const newArray = [];

    cartArray.forEach((item, index) => {
      
      sum = cartArray[index].price;
      newArray.push(sum);
      const total = newArray.reduce((a, b) => {
        return a + b;
      });
      console.log(newArray);
      console.log(total);
      setSum(total);
    });
  }

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
                cartCallback2={cartCallback2}
              />
            }
          />
          <Route
            path="/cart"
            // pass empty array
            element={
              <CartPage
                name={name}
                price={price}
                cartArray={cartArray}
                addValue={add}
                sum={sum}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
