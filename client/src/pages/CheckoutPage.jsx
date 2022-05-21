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

import "./Checkout.css";

const CheckoutPage = ({ total, setTotal, setAddValue, removeAll }) => {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div className="checkout-section">
        <div></div>
        <div className="payment-details">
          <h1>Payment Details</h1>
          <p>Complete your purchase by providing your payment details.</p>
        </div>
        <div></div>
      </div>
      <div className="checkout-form">
        <div></div>
        <div className="form-input">
          <h3>Email address</h3>
          <TextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            style={{ width: "300px" }}
          />
          <h3>Card number</h3>
          <TextField
            id="outlined-basic"
            label="Card number"
            variant="outlined"
          />
          <h3>Cardholder name</h3>
          <TextField
            id="outlined-basic"
            label="Cardholder name"
            variant="outlined"
          />
          <h3>Billing Address</h3>
          <TextField
            id="outlined-basic"
            label="Billing Address"
            variant="outlined"
          />
          <h3>State</h3>
          <TextField id="outlined-basic" label="State" variant="outlined" />
          <h3>Zipcode</h3>
          <TextField id="outlined-basic" label="ZIP" variant="outlined" />
        </div>
        <div></div>
      </div>
      <Link style={{ textDecoration: "none" }} to="/thank">
        <Button
          style={{
            marginTop: "25px",
            width: "200px",
            transition: "0.5s",
            "&:hover": {
              backgroundColor: "#EB565A",
              color: "white",
            },
          }}
          variant="contained"
          onClick={() => {
            setAddValue(0);
            removeAll();
            setTotal(0);
          }}
        >
          Pay ${total}
        </Button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
