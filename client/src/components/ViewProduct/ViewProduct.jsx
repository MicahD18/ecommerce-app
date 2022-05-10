import React, { useState } from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import { useLocation } from "react-router-dom";

const ViewProduct = ({ addToCart, addTotal }) => {
  const location = useLocation();
  const { from } = location.state;

  const [counter, setCounter] = useState(0);

  const { media, card, button, counterComponent, counterButton, counterValue } =
    useStyles();

  const handleDecrement = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(0);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Card className={card}>
        <CardMedia className={media} image={from.image} title={from.name} />
        <h1>{from.name}</h1>
        <p>{from.about}</p>
        <h2>${from.price}</h2>
        <div className={counterComponent}>
          <button className={counterButton} onClick={handleDecrement}>
            -
          </button>
          <p className={counterValue}>{counter}</p>
          <button className={counterButton} onClick={handleIncrement}>
            +
          </button>
        </div>
        <button className={button} onClick={() => {
          addToCart(from.name, from.price);
          addTotal(counter);
        }}>
          <ShoppingCart /> Add to Cart
        </button>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "25px",
    textAlign: "left",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingBottom: "25px",
    lineHeight: "25px",
  },
  media: {
    width: "100%",
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
    width: "100%",
    "&:hover": {
      backgroundColor: "#EB565A",
      color: "white",
      cursor: "pointer",
    },
  },
  counterComponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    marginBottom: "25px",
    width: "100%",
    height: "40px",
  },
  counterButton: {
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "24px",
  },
  counterValue: {
    marginTop: "5px",
    fontSize: "20px",
  },
}));

export default ViewProduct;
