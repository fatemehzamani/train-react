import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([
    { id: 1, name: " - iphone 13 pro max - ", price: 1400 },
    { id: 2, name: " - iphone 13 - ", price: 1000 },
    { id: 3, name: " - iphone 12 - ", price: 900 },
  ]);
  // هر جایی اسم provider رو بیاریم  و بینش هر چیزی بنویسیم میشه children
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};
