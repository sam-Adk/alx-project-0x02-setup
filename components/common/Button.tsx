import React from "react";
import { ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;

