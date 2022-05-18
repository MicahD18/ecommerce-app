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

const ViewProduct = ({ addToCart, addTotal, cartCallback }) => {
  const location = useLocation();
  const { from } = location.state;

  const { media, card, button, counterComponent, counterButton, counterValue } =
    useStyles();

  return (
    <div>
      <Card className={card}>
        <CardMedia className={media} image={from.image} title={from.name} />
        <h1>{from.name}</h1>
        <p>{from.about}</p>
        <h2>${from.price}</h2>
        <button className={button} onClick={() => {
          addToCart(from.name, from.price);
          cartCallback(from.name, from.price);
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
}));

export default ViewProduct;
