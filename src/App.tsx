import { Grid } from "@mui/material";
import * as React from "react";
import "./App.css";
import { ProductDataType } from "./components/datatypes";
import FunctionalityMenu from "./components/FunctionalityMenu/FunctionalityMenu";
import Header from "./components/header/Header";
import ProductMenu from "./components/productMenu/ProductMenu";
import { ProductContext } from "./context";

const productData: ProductDataType[] = [
  {
    img: "https://m.media-amazon.com/images/I/61vCbHw9QBS._AC_UL320_.jpg",
    name: "Twitch Shirt",
    description: "Core Logo Tee",
    price: 20,
  },
  {
    img: "https://m.media-amazon.com/images/I/71F0Vm7FhML._AC_UL320_.jpg",
    name: "Enamel Pin",
    description: "Twitch Collectible Enamel Pin",
    price: 6,
  },
  {
    img: "https://m.media-amazon.com/images/I/71PdLfApbSS._AC_UL320_.jpg",
    name: "Generic Hoodie",
    description: "Technoblade Hoodie Unisex Merch for Women Men Teen",
    price: 22.99,
  },
  {
    img: "https://m.media-amazon.com/images/I/81TrMM9GsFL._AC_UL320_.jpg",
    name: "Windbreaker Hoodie",
    description: "Graphic Zip Up Hoodie",
    price: 52,
  },
  {
    img: "https://m.media-amazon.com/images/I/81x8iXvKxZL._AC_UL320_.jpg",
    name: "Luv",
    description: "Men's Dr Pepper Hoodie - Lightweight",
    price: 39.97,
  },
];

function App() {
  const [products, setProducts] = React.useState([
    { img: "", name: "", description: "", price: 0 },
  ]);

  React.useEffect(() => {
    setProducts(productData);
  }, []);

  const handleSearchProduct = (searchVal: string) => {
    const results = productData.filter((product) => {
      const prodName = product.name.toLowerCase();
      const prodDescription = product.description.toLowerCase();
      return (
        prodName.includes(searchVal) || prodDescription.includes(searchVal)
      );
    });

    setProducts(results);
  };

  const addProduct = (newProduct: ProductDataType) => {
    setProducts([...products, newProduct]);
    productData.push(newProduct);
  };

  return (
    <div className="App">
      <Header />
      <ProductContext.Provider value={{ products, addProduct }}>
        <Grid container>
          <Grid item xs={4} xl={3} p={5} pr={0} pt={13}>
            <FunctionalityMenu searchProductCallback={handleSearchProduct} />
          </Grid>
          <Grid item xs={8} xl={9}>
            <ProductMenu />
          </Grid>
        </Grid>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
