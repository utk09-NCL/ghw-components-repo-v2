import React from "react";
import classNamesUtil from "./classNamesUtil";

const Button = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`bg-blue-700 text-blue-50 m-2 p-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
