import { Grid, Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../context";
import { ProductDataType } from "../datatypes";
import Product from "../product/Product";
import "./ProductMenu.css";

function ProductMenu() {
  const productContext = useContext(ProductContext);

  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} pt={4}>
        <Typography className="Product-Title" variant="h3">
          Our Products!
        </Typography>
      </Grid>
      <Grid
        container
        spacing={4}
        p={5}
        pt={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {productContext?.products.length === 0 ? (
          <Grid item xs={12}>
            <Typography className="Product-Warning" variant="h4">
              No items in Product List
            </Typography>
          </Grid>
        ) : (
          <Fragment></Fragment>
        )}
        {productContext?.products.map(
          (ProductData: ProductDataType, index: any) => {
            return (
              <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                <Product data={ProductData} key={index} />
              </Grid>
            );
          }
        )}
      </Grid>
    </Grid>
  );
}

export default ProductMenu;
