import React from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const CartPage = ({ name, price }) => {
  console.log(price);

  const { card } = useStyles();

  {if (name === "" && price === undefined) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>
        No items are in your cart. <Link to="/">Start adding some!</Link>
      </p>
      </div>
    )
  }}

  return (
    <div>
      <h1>Your Cart</h1>
      <Card className={card}>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "25px",
    marginLeft: "25px",
    marginRight: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  media: {
    width: "100%",
    height: "50vh",
    paddingTop: "25%",
  },
}));

export default CartPage;
