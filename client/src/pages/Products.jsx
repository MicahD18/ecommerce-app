import React, { useState, useEffect } from "react";

import Product from "../components/Product/Product";

import { Container, makeStyles, Grid } from "@material-ui/core";

const Products = ({ addToCart, cartCallback }) => {
  const { header } = useStyles();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch all products
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        console.log(data[0].title);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <h2>Sorry,</h2>
        <p>Something went wrong on our end.</p>
        <p>Please go back and try again.</p>
      </div>
    );

  return (
    <Container>
      <h1 className={header}>All Products</h1>
      <Grid container justifyContent="center" spacing={4}>
        {data.map((item) => {
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
