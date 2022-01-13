import { createContext, useState } from "react";

export const CartContext = createContext();
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [value, setValue] = useState(0);
  const handleCart = (id, amount) => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCart([...cart, res]);
        setValue((prev) => prev + amount);
      });
  };
  return (
    <CartContext.Provider value={{ cart, handleCart, value }}>
      {children}
    </CartContext.Provider>
  );
}
