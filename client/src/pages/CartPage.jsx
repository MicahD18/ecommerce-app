import React, { useState } from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import "./CartPage.css";

import { Link } from "react-router-dom";

const CartPage = ({ name, price, cartArray, addValue, sum, setSum }) => {
  const [counter, setCounter] = useState(1);
  const [countArray, setCountArray] = useState([]);

  const { button, counterValue } = useStyles();

  let allItems = cartArray.map((item) => {

    const handleDecrement = () => {
      setCounter(counter - 1);
      if (counter === 1) {
        setCounter(1);
      }

      countArray.pop({ price: price });
      setCountArray(countArray);
      console.log(countArray);

      const total = countArray.reduce((currentTotal, item) => {
        return item.price + currentTotal;
      }, price);
      console.log(total);
      setSum(total);
    };

    const handleIncrement = () => {
      setCounter(counter + 1);

      countArray.push({ price: price });
      setCountArray(countArray);
      console.log(countArray);

      const total = countArray.reduce((currentTotal, item) => {
        return item.price + currentTotal;
      }, price);
      console.log(total);
      setSum(total);
    };

    return (
      <div>
        <Card className="card">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className="counterComponent">
            <button className="counterButton" onClick={handleDecrement}>
              -
            </button>
            <p className={counterValue}>{counter}</p>
            <button className="counterButton" onClick={handleIncrement}>
              +
            </button>
          </div>
        </Card>
      </div>
    );
  });

  {
    if (name === "" && price === undefined) {
      return (
        <div>
          <h1>Your Cart</h1>
          <p>
            No items are in your cart. <Link to="/">Start adding some!</Link>
          </p>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {allItems}
      <h3>Total amount: ${sum}</h3>
      <p>Items: ({addValue})</p>
      <button className={button} onClick={() => {}}>
        Checkout
      </button>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  media: {
    width: "75%",
    height: "50vh",
    paddingTop: "25%",
  },
  button: {
    backgroundColor: "#E0E0E0",
    color: "#404040",
    textDecoration: "none",
    transition: "0.5s",
    borderStyle: "none",
    fontSize: "18px",
    padding: "15px",
    borderRadius: "15px",
    width: "75%",
    "&:hover": {
      backgroundColor: "#EB565A",
      color: "white",
      cursor: "pointer",
    },
  },
  counterValue: {
    marginTop: "5px",
    fontSize: "20px",
  },
}));

export default CartPage;
