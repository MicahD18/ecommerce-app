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

  const handleData = (name, price) => {
    setAdd(add + 1);
    console.log(add);
    setName(name);
    setPrice(price);
  };

  const handleCounter = (counter) => {
    setAdd(counter);
  };

  const cartCallback = (name, price) => {
    // if (add > 0) {
    //   return;
    // }
    // cartArray.forEach((item, index) => {
    //   console.log(item);
    //   console.log(index);
    //   if (name !== cartArray[0].name) {
    //     console.log("add item to cart");
    //   }
    // });

    cartArray.push({ name: name, price: `${price}` });
    setClickCount(clickCount + 1);
    console.log(cartArray);

    for (let i = 0; i < cartArray.length; i++) {
      console.log(cartArray[i].price);
      setSum(sum += cartArray[i].price);
    }
    console.log(sum);
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
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
