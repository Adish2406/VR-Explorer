import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button 
    className=" justify-center text-l cursor-pointer hover:bg-blue-200 rounded-full p-3"
    style={{ fontWeight: "bold" }}
    onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;