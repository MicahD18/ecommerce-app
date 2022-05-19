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
  let [sum, setSum] = useState("");
  let [count, setCount] = useState(1);
  const [clicked, setClicked] = useState([]);

  const handleData = (name, price) => {
    setAdd(add + 1);
    if (clicked.includes(name)) {
      setAdd(add);
    }
    console.log(add);
    setName(name);
    setPrice(price);
  };

  const handleCounter = (counter) => {
    count = counter;
    setCount(count);
    console.log(count);
  };

  // callback is called on "Add to Cart" button
  // on both Products and ProductView page
  const cartCallback = (name, price) => {
    if (!clicked.includes(name)) {
      setClicked([...clicked, name]);
      cartArray.push({ name: name, price: price });
      setClickCount(clickCount + 1);
      setCartArray(cartArray);
      console.log(cartArray);

      const total = cartArray.reduce((currentTotal, item) => {
        return item.price + currentTotal;
      }, 0);
      console.log(total);
      setSum(total);
    } else {
      console.log("Repeated item clicked!");
    }

    console.log(cartArray);
  };

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
              <CartPage
                name={name}
                price={price}
                cartArray={cartArray}
                addValue={add}
                sum={sum}
                setSum={setSum}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
