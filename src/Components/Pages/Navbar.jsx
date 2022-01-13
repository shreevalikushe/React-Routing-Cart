import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#FF7F3F",
        color: "#EA5C2B",
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        justifyContent: "center",
        height: "30px",
        padding: "1rem",
      }}
    >
      <Link style={{ textDecoration: "none", color: "#000B49" }} to="/">
        Home Page
      </Link>
      <Link style={{ textDecoration: "none", color: "#000B49" }} to="/cart">
        Cart Page
      </Link>
    </div>
  );
}
