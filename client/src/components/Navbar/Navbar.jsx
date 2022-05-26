import React from "react";

import {
  Container,
  IconButton,
  Badge,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({itemAmount}) => {
  const { container, logoHeader, cartIcon } = useStyles();

  return (
    <Container className={container}>
      <Link to="/" className="header">
        <div className={logoHeader}>
          <img src={"https://cdn-icons-png.flaticon.com/512/825/825561.png"} height="40px" />
          <h1 className="title">Shopping Center</h1>
        </div>
      </Link>

      <Link to="/cart" className="header">
        <div className={cartIcon}>
          <Badge color="secondary" badgeContent={itemAmount}>
            <ShoppingCart />
          </Badge>

          <Typography className="header">Cart</Typography>
        </div>
      </Link>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "black",
    color: "white",
    height: "75px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "15px",
  },
  logoHeader: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
  },
  cartIcon: {
    cursor: "pointer",
    transition: "0.5s",
    padding: "5px",
    height: "25px",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "#EB565A",
    },
  },
}));

export default Navbar;
