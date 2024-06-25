import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ButtonProps } from "@/components/Button/index";
import { getConditionalCss } from "@/utils/emotion";
import { css } from "@emotion/react";

export const StyledButton = styled(
  ({
    fontSize,
    fontWeight,
    backgroundColor,
    hoverBackgroundColor,
    borderColor,
    borderRadius,
    textColor,
    width,
    height,
    padding,
    ...args
  }: ButtonProps) => <Button {...args} />,
)`
  box-shadow: none;
  ${({ fontSize }) => getConditionalCss("fontSize", fontSize, "px")};
  ${({ fontWeight }) => getConditionalCss("fontWeight", fontWeight)};
  ${({ backgroundColor }) =>
    getConditionalCss("backgroundColor", backgroundColor)};
  ${({ borderRadius }) =>
    getConditionalCss("borderRadius", borderRadius, "px")};
  ${({ textColor }) => getConditionalCss("color", textColor)};
  ${({ width }) => getConditionalCss("width", width, "px")};
  ${({ height }) => getConditionalCss("height", height, "px")};
  ${({ padding }) => getConditionalCss("padding", padding)};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}

  &:hover {
    box-shadow: none;
    ${({ backgroundColor, hoverBackgroundColor }) =>
      getConditionalCss(
        "backgroundColor",
        hoverBackgroundColor || backgroundColor,
      )};
  }
`;
