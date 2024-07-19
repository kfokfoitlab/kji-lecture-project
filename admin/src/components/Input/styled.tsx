import styled from "@emotion/styled";
import { InputProps } from "./index";
import { IconButton, TextField } from "@mui/material";
import { css } from "@emotion/react";
import { generateEmotionStyle } from "../../utils/emotion";
import { IconButtonProp } from "../Button";

export const StyledTextField = styled(
  ({ width, height, fontSize, padding, ...args }: InputProps) => (
    <TextField {...args} />
  ),
)`
  ${({ width }) => {
    if (!width) {
      return `width: 100%;`;
    }

    if (typeof width === "number") {
      return `width: ${width}px;`;
    }

    return `width: ${width};`;
  }}

  &.MuiTextField-root {
    & .MuiInput-input {
      ${({ padding }) => generateEmotionStyle("padding", padding)};
    }

    & .MuiOutlinedInput-input {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;

      &.MuiTextField-root {
        & .MuiInputLabel-root {
          line-height: ${height}px;
          margin-top: -16px;
        }

        & .MuiOutlinedInput-root {
          height: ${height}px;
        }

        & .MuiOutlinedInput-input {
          height: ${height}px;
          line-height: ${height}px;
        }
      }
    `};

  &,
  & * {
    font-size: ${({ fontSize }) => fontSize || 16}px;
  }
  outline: 0;
`;

export const StyledIconButton = styled(
  ({ iconColor, size, ...args }: IconButtonProp) => <IconButton {...args} />,
)`
  padding: 0;
  ${({ iconColor }) =>
    iconColor &&
    css`
      & svg * {
        color: ${iconColor};
      }
    `}

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `};
`;
