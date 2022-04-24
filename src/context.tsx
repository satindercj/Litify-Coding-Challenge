import { createContext } from "react";
import { ProductDataType } from "./components/datatypes";

export interface ProductContextInterface {
  products: ProductDataType[];
  addProduct: (newProduct: ProductDataType) => void;
}

export const ProductContext = createContext<ProductContextInterface | null>(
  null
);
