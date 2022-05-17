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

const CartPage = ({ name, price, cartArray, addValue, sum }) => {
  console.log(price);

  console.log(sum);

  let allItems = cartArray.map((item) => {

    return (
      <div>
        <Card className={card}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </Card>
      </div>
    );
  });

  const { card } = useStyles();

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
      <p>Item amount: ({addValue})</p>
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
    paddingRight: "15px",
  },
  media: {
    width: "100%",
    height: "50vh",
    paddingTop: "25%",
  },
}));

export default CartPage;
