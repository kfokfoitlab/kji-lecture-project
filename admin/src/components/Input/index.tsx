import { StyledTextField } from "./styled";
import React, { useMemo, useState } from "react";
import { TextFieldProps } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "../Button";

export type InputProps = TextFieldProps & {
  width?: string | number;
  height?: number;
  fontSize?: number;
  padding?: string;
  isShowHide?: boolean;
  errorText?: string;
};

export default function Input({
  type,
  isShowHide,
  height = 46,
  ...args
}: InputProps) {
  const [isHidePassword, setIsHidePassword] = useState(true);

  const onClickHideButton = () => {
    setIsHidePassword(!isHidePassword);
  };

  const inputType = useMemo(() => {
    if (type !== "password") {
      return type;
    }

    if (isHidePassword) {
      return "password";
    }

    return "text";
  }, [type, isHidePassword]);

  return (
    <StyledTextField
      type={inputType}
      height={height}
      {...args}
      InputProps={{
        endAdornment: isShowHide && (
          <IconButton size={30} onClick={onClickHideButton}>
            {isHidePassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility />
            )}
          </IconButton>
        ),
      }}
    />
  );
}
