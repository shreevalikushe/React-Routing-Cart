import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch(" http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  const { handleCart, cartValue } = useContext(CartContext);
  return (
    <div>
      <h3>Welcome to a mini-cart application</h3>
      {data.map((e) => {
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
            <button
              onClick={() => handleCart(e.id, e.price)}
              style={{ border: "none" }}
            >
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
}
