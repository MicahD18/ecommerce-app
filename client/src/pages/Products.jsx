import React, { useState, useEffect } from "react";

import Product from "../components/Product/Product";

import {
  Container,
  makeStyles,
  Grid,
  TextField,
  Autocomplete,
  Button,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const API_URL = "https://fakestoreapi.com/products";

// const categories = [
//   { category: "men's clothing" },
//   { category: "jewelery" },
//   { category: "electronics" },
//   { category: "women's clothing" },
// ];

const Products = ({ addToCart, cartCallback }) => {
  const { header, search } = useStyles();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState("men's clothing");

  const filterProductCategory = async (category) => {
    const response = await fetch(`${API_URL}/category/${category}`);
    const data = await response.json();

    setCategory(data);
  };

  const getAllCategories = async () => {
    const response = await fetch(`${API_URL}/category/${category}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    // fetch all products
    fetch(`${API_URL}/category/${category}`)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setCategory(data);
        if (category === "men's clothing") {
          setCategory(data);
        }
        if (category === "women's clothing") {
          setCategory(data);
        }
        if (category === "electronics") {
          setCategory(data);
        }
        if (category === "jewelery") {
          setCategory(data);
        }
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
        <h1 className={header}>All Products</h1>
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
      <div>
        <AppBar position="static" color="default">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Men's Clothing" onClick={() => {
              filterProductCategory("men's clothing");
            }} />
            <Tab label="Women's Clothing" onClick={() => {
              filterProductCategory("women's clothing");
            }} />
            <Tab label="Tech" onClick={() => {
              filterProductCategory("electronics");
            }}/>
            <Tab label="Jewelery" onClick={() => {
              filterProductCategory("jewelery");
            }}/>
          </Tabs>
        </AppBar>
        {/* {categories.map((item, index) => {
          
          return (
            <div
              key={index}
              onClick={() => {
                // handleWorkFilter(item)
              }}
              // className={`app__work-filter-item app__flex p-text ${
              //   activeFilter === item ? "item-active" : ""
              // }`}
            >
              <button>{item.category}</button>
            </div>
          );
        })} */}
      </div>
      <Grid container justifyContent="center" spacing={4}>
        {category.map((item) => {
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
  search: {
    width: "350px",
  },
}));

export default Products;
