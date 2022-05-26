import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Products from "./pages/Products";
import ViewProductPage from "./pages/ViewProductPage";
import CartPage from "./pages/CartPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import ThankPage from "./pages/ThankPage";

const App = () => {
  const [add, setAdd] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [cartArray, setCartArray] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  let [sum, setSum] = useState("");
  // checks if name is included in the array
  // const [clicked, setClicked] = useState([]);

  const handleData = (name, price, image) => {
    setAdd(add + 1);
    // if (clicked.includes(name)) {
    //   setAdd(add);
    // }
    console.log(image);
    setName(name);
    setPrice(price);
  };

  const removeAllItems = () => {
    cartArray.splice(0, cartArray.length);
    setCartArray(cartArray);
    console.log(cartArray);
  };

  // callback is called on "Add to Cart" button
  // on both Products and ProductView page
  const cartCallback = (name, price, image) => {
    cartArray.push({ name: name, price: price, image: image });
    setClickCount(clickCount + 1);
    setCartArray(cartArray);
    console.log(cartArray);

    const total = cartArray.reduce((currentTotal, item) => {
      return item.price + currentTotal;
    }, 0);
    console.log(total);
    setSum(total);

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
                setCartArray={setCartArray}
                addValue={add}
                setAddValue={setAdd}
                sum={sum}
                setSum={setSum}
                removeAll={removeAllItems}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutPage total={sum} setTotal={setSum} setAddValue={setAdd} removeAll={removeAllItems} />} />
          <Route path="/thank" element={<ThankPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
