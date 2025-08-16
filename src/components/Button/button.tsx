// src/components/Button/Button.tsx
import React from "react";
import MuiButton from "@mui/material/Button";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  disabled = false,
}) => {
  return (
    <MuiButton 
      variant={variant} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
