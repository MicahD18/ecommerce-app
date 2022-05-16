import React from "react";

import Product from "../components/Product/Product";

import { products } from "../components/Product/productData";

import { Container, makeStyles, Grid } from "@material-ui/core";

const Products = ({addToCart, cartCallback, addValue}) => {
  const { header } = useStyles();

  return (
    <Container>
      <h1 className={header}>Products</h1>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <Product
                data={item}
                addToCart={addToCart}
                cartCallback={cartCallback}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  header: {
    marginTop: "25px",
  },
}));

export default Products;
