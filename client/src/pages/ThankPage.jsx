import React from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const ThankPage = () => {
  return (
    <div>
      <h1>Thank you.</h1>
      <p>Your order was completed successfully.</p>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button variant="contained">Back Home</Button>
      </Link>
    </div>
  );
};

export default ThankPage;
