import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section
      style={{
        textAlign: "center",
        paddingBottom: "5px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/">1</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
        <Link to="/4">4</Link>
      </nav>
    </section>
  );
}
export default Header;
