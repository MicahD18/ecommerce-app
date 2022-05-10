import React from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import { useLocation } from "react-router-dom";

const ViewProduct = () => {
  const location = useLocation();
  const { from } = location.state;

  const { media, card } = useStyles();

  return (
    <div>
      <Card className={card}>
        <CardMedia
          className={media}
          image={from.image}
          title={from.name}
        />
        <h1>{from.name}</h1>
        <p>${from.price}</p>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "25px",
  },
  media: {
    width: "100%",
    height: "50vh",
    paddingTop: "25%",
  },
}));

export default ViewProduct;
