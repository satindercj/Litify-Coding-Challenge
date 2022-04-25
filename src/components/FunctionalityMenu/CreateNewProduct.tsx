import {
  Button,
  Dialog,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { ProductContext } from "../../context";
import "./CreateNewProduct.css";

export interface CreateNewProductProps {
  open: boolean;
  onClose: () => void;
}

const initalState = {
  name: "",
  description: "",
  url: "",
  price: "",
};

function CreateNewProduct(props: CreateNewProductProps) {
  const { onClose, open } = props;

  const [{ name, description, url, price }, setState] = useState(initalState);

  const productContext = useContext(ProductContext);

  const handleClose = () => {
    onClose();
  };

  //Add's Product with function from Context
  const addProduct = () => {
    const priceVal = Number(price);

    productContext?.addProduct({
      name,
      description,
      img: url,
      price: priceVal,
    });

    setState({ ...initalState });
    onClose();
  };

  //Updates state on OnChange Event
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Paper>
        <Grid
          container
          sx={{
            textAlign: "center",
          }}
        >
          <Grid item xs={12} pt={2}>
            <Typography className="Dialog-Title" variant="h4">
              Add New Product
            </Typography>
          </Grid>
          <Grid container p={2}>
            <Grid item xs={4}>
              <Typography className="Dialog-Label" variant="h6">
                Product Name:
              </Typography>
            </Grid>
            <Grid item xs={8} pb={2}>
              <TextField
                className="Dialog-Input"
                label="Product Name"
                variant="outlined"
                value={name}
                name="name"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography className="Dialog-Label" variant="h6">
                Product Description:
              </Typography>
            </Grid>
            <Grid item xs={8} pt={2} pb={2}>
              <TextField
                className="Dialog-Input"
                label="Product Description"
                variant="outlined"
                value={description}
                name="description"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography className="Dialog-Label" variant="h6">
                Product Image URL:
              </Typography>
            </Grid>
            <Grid item xs={8} pt={2} pb={2}>
              <TextField
                className="Dialog-Input"
                label="Product Image URL"
                variant="outlined"
                value={url}
                name="url"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography className="Dialog-Label" variant="h6">
                Product's Price:
              </Typography>
            </Grid>
            <Grid item xs={8} pt={2} pb={2}>
              <TextField
                className="Dialog-Input"
                label="Product's Price"
                variant="outlined"
                value={price}
                name="price"
                onChange={onChange}
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} pt={2} pb={4}>
            <Button
              className="Dialog-Submit"
              variant="outlined"
              disabled={
                !(
                  name.length > 0 &&
                  description.length > 0 &&
                  url.length > 0 &&
                  price.length > 0
                )
              }
              size="large"
              onClick={addProduct}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  );
}

export default CreateNewProduct;
