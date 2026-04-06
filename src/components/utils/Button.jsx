import React from "react";
import { useNavigate } from "react-router";

const Button = ({ children, to, primary = true, onclick ,className }) => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(to);
        onclick();
      }}
      className={`flex items-center gap-2 ${primary ? "btn-volt" : "btn-ghost"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
