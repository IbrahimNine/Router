import React from "react";
import "./Navbar.css";

function Navbar({ toggleShow }) {
  return (
    <div className="Navbar">
      <img
        src="https://media.baamboozle.com/uploads/images/252715/1614542200_110083_gif-url.gif"
        alt="Website Logo"
        height={"100%"}
      />

      <button onClick={toggleShow}>
        <span className="toShow">Add more </span>
        <strong>+</strong>
      </button>
    </div>
  );
}

export default Navbar;
