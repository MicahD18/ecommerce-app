import React from "react";
import ViewProduct from "../components/ViewProduct/ViewProduct";

import { Container, makeStyles, Grid } from "@material-ui/core";

const ViewProductPage = ({addToCart, addTotal, cartCallback}) => {
  // const { header } = useStyles();

  return (
    <Container>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={10} md={6} lg={7}>
          <ViewProduct addToCart={addToCart} addTotal={addTotal} cartCallback={cartCallback} />
        </Grid>
      </Grid>
    </Container>
  );
};

// const useStyles = makeStyles(() => ({
//   header: {
//     marginTop: "25px",
//   },
// }));

export default ViewProductPage;
