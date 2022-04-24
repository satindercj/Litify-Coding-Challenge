import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CreateNewProduct from "./CreateNewProduct";
import "./FunctionalityMenu.css";

function FunctionalityMenu(props: any) {
  const [searchVal, setSearchVal] = useState("");
  const [open, setOpen] = useState(false);

  const getSearchVal = (event: any) => {
    const searchVal = event.target.value;

    setSearchVal(searchVal);

    props.searchProductCallback(searchVal.toLowerCase());
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className="Menu">
      <Typography className="Menu-Subtitle" variant="h4">
        Search
      </Typography>

      <TextField
        className="Menu-Search"
        label="Search Product"
        variant="outlined"
        value={searchVal}
        onChange={getSearchVal}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "#fff",
            },
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#fff",
            },
          },
          ".MuiFormLabel-root.Mui-focused": {
            color: "#fff !important",
          },
          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "0.2rem solid #fff !important",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#fff",
            fontFamily: "'Signika Negative', sans-serif",
          },
        }}
        InputProps={{
          style: {
            fontFamily: "'Signika Negative', sans-serif",
          },
        }}
      />

      <Divider className="Menu-Divider"></Divider>

      <Typography className="Menu-Subtitle" variant="h4">
        Add Product
      </Typography>
      <Button
        className="Menu-Button"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add New Product!
      </Button>
      <CreateNewProduct open={open} onClose={handleClose} />
    </Paper>
  );
}

export default FunctionalityMenu;
