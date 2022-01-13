import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export function Cart() {
  const { value, cart } = useContext(CartContext);
  return (
    <div>
      <h3>Cart Page</h3>
      {cart.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              border: "1px solid #548CFF",
              width: "410px",
              //   height: "400px",
              justifyContent: "center",
              margin: "2rem",
              gap: "1rem",
              float: "left",
              padding: "0.1rem",
            }}
          >
            <h4>Product Name: {e.product_name}</h4>
            <img src={e.image_url} alt="test" />
            <p>
              <i>Description- </i>
              {e.description}
            </p>
            <h5>Price:{e.price}</h5>
          </div>
        );
      })}
      <h4>Cart Price:{value}</h4>
    </div>
  );
}
