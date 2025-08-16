import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, Clear } from "@mui/icons-material";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "standard" | "ghost"; // added ghost separately
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // map sizes
  const sizeMap = {
    sm: "small",
    md: "medium",
    lg: "medium", // MUI doesn't have lg, so we can style later
  } as const;

  // ghost variant handling (simulate by removing borders)
  const isGhost = variant === "ghost";

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled || loading}
      error={invalid}
      helperText={invalid ? errorMessage : helperText}
      variant={isGhost ? "standard" : variant} // ghost handled separately
      size={sizeMap[size]}
      type={type === "password" && !showPassword ? "password" : "text"}
      fullWidth
      InputProps={{
        sx: isGhost
          ? {
              border: "none",
              boxShadow: "none",
              "& .MuiInputBase-input": { padding: "6px 0" },
            }
          : {},
        endAdornment: (
          <>
            {loading && (
              <InputAdornment position="end">
                <CircularProgress size={20} />
              </InputAdornment>
            )}
            {clearable && value && (
              <InputAdornment position="end">
                <IconButton onClick={() => onChange?.({ 
                  target: { value: "" } 
                } as React.ChangeEvent<HTMLInputElement>)}>
                  <Clear fontSize="small" />
                </IconButton>
              </InputAdornment>
            )}
            {type === "password" && (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
          </>
        ),
      }}
    />
  );
};

export default InputField;
