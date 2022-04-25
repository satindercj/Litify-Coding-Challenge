import { Grid } from "@mui/material";
import * as React from "react";
import "./App.css";
import { ProductDataType } from "./components/datatypes";
import FunctionalityMenu from "./components/FunctionalityMenu/FunctionalityMenu";
import Header from "./components/header/Header";
import ProductMenu from "./components/productMenu/ProductMenu";
import { ProductContext } from "./context";
import { API } from "aws-amplify";
import { listProducts } from "./graphql/queries";
import { createProduct as createProductMutation } from "./graphql/mutations";

function App() {
  const [products, setProducts] = React.useState([
    { img: "", name: "", description: "", price: 0 },
  ]);
  const [totalProducts, setTotalProducts] = React.useState([
    { img: "", name: "", description: "", price: 0 },
  ]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  //Pulls Product Data for GraphQL API
  async function fetchProducts() {
    const apiData: any = await API.graphql({ query: listProducts });
    setProducts(apiData.data.listProducts.items);
    setTotalProducts(apiData.data.listProducts.items);
  }

  //Search's and return Products
  const handleSearchProduct = (searchVal: string) => {
    const results = totalProducts.filter((product) => {
      const prodName = product.name.toLowerCase();
      const prodDescription = product.description.toLowerCase();
      return (
        prodName.includes(searchVal) || prodDescription.includes(searchVal)
      );
    });

    setProducts(results);
  };

  //Adds Product to dynamoDB and state
  const addProduct = async (newProduct: ProductDataType) => {
    await API.graphql({
      query: createProductMutation,
      variables: { input: newProduct },
    });
    setProducts([...products, newProduct]);
    setTotalProducts([...products, newProduct]);
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
