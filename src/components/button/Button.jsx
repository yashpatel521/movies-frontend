import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

function Button({ id, icon, name, bgColor = "#ff3700", color = "#ffffff" }) {
  return (
    <Link
      to={`./details?id=${id}`}
      className="mainBtn"
      style={{ color: color, background: bgColor }}
    >
      {icon} {name}
    </Link>
  );
}

export default Button;
