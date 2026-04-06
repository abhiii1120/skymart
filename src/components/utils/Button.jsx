import React from "react";
import { useNavigate } from "react-router";

const Button = ({ children, to, primary = true }) => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={`flex items-center gap-2 ${primary ? "btn-volt" : "btn-ghost"}`}
    >
      {children}
    </button>
  );
};

export default Button;
