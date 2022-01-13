import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { Home } from "./Home";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}
