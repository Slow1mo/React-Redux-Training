import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="btn"
    >
      Add
    </button>
  );
};

export default Button;
