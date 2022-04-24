import { Paper, Typography } from "@mui/material";
import { ProductDataType } from "../datatypes";
import "./Product.css";

function Product(props: { data: ProductDataType }) {
  const formatedNumber = props.data.price.toLocaleString(navigator.language, {
    maximumFractionDigits: 2,
  });

  return (
    <Paper className="Product-Background" elevation={0}>
      <img className="Product-Img" src={props.data.img} />
      <Typography className="Product-Name" variant="h5">
        {props.data.name}
      </Typography>
      <Typography className="Product-Description" variant="h6">
        {props.data.description}
      </Typography>
      <Typography className="Product-Price" variant="h6">
        {`$${formatedNumber}`}
      </Typography>
    </Paper>
  );
}

export default Product;
