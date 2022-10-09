import React from "react";

function Header({ text }) {
  return (
    <header style={{ backgroundColor: "bisque", color: "red" }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
