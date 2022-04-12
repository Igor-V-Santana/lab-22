import { ProductProps } from "../components/Product";
import create from "zustand";
import axios from "axios";

type Product = {
  products: ProductProps[];
  setProducts: () => void;
  setQuantity: (productsList: ProductProps[]) => void;
};

export const useProducts = create<Product>((set) => ({
  products: [],
  setProducts: async () => {
    const url = "http://localhost:3001/products"
    const response = await axios.get(url);
    response.data.map((product: ProductProps) => (product.quantityBuy =  0));
    set(() => ({ products: response.data }))
  },
  setQuantity: (productsList) => set({ products: productsList }),
}));