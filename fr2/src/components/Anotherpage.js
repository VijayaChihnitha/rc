import React from "react";
import { CartProvider } from "react-use-cart";// Import the CartProvider from its source file
import Cart from "./cart";
import Add from "./add";
import Itemcard from "./Itemcard";
const AnotherPage = () => {
  return (
    <div>
      
      <CartProvider>
        
        <Cart />
      </CartProvider>
    </div>
  );
};

export default AnotherPage;
