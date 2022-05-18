import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import "./Product.css";

const Product = ({ data, addToCart, cartCallback }) => {
  const { card, media, productInfo, buttons, button } = useStyles();

  return (
    <div>
      <Card className={card}>
        <CardMedia className={media} image={data.image} title={data.name} />
        <CardContent>
          <div className={productInfo}>
            <Typography variant="h6">{data.name}</Typography>
            <Typography variant="h6">${data.price}</Typography>
          </div>

          <Typography
            dangerouslySetInnerHTML={{ __html: data.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <div className={buttons}>
          <Link
            to="/viewProduct"
            state={{
              from: {
                image: `${data.image}`,
                name: `${data.name}`,
                price: data.price,
                about: `${data.about}`
              },
            }}
            className={button}
          >
            View Product
          </Link>
          <button
            className={button}
            id="add"
            onClick={() => {
              addToCart(data.name, data.price);
              cartCallback(data.name, data.price);
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "25px",
    paddingBottom: "25px"
  },
  media: {
    height: 0,
    paddingTop: "50%",
  },
  productInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "25px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "15px",
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
    "&:hover": {
      backgroundColor: "#EB565A",
      color: "white",
    },
  },
}));

export default Product;
