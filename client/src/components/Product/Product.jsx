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
  const { main, card, media, productInfo, buttons, button1, button2 } = useStyles();

  return (
    <div className={main}>
      <div></div>
      <Card className={card}>
        <CardMedia className={media} image={data.image} title={data.title} />
        <CardContent>
          <div className={productInfo}>
            <Typography variant="h6">{data.title}</Typography>
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
                name: `${data.title}`,
                price: data.price,
                about: `${data.description}`,
              },
            }}
            className={button1}
          >
            <Button
              className={button2}
            >
              View Product
            </Button>
          </Link>
          <Button
            className={button2}
            id="add"
            variant="contained"
            onClick={() => {
              console.log(data.image);
              addToCart(data.title, data.price, data.image);
              cartCallback(data.title, data.price, data.image);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
      <div></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  card: {
    marginTop: "25px",
    paddingBottom: "25px",
    width: "300px"
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
  button1: {
    textDecoration: "none",
  },
  button2: {
    backgroundColor: "#E0E0E0",
    color: "#404040",
    textDecoration: "none",
    transition: "0.5s",
    borderStyle: "none",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "15px",
    height: "50px",
    "&:hover": {
      backgroundColor: "#EB565A",
      color: "white",
    },
  },
}));

export default Product;
