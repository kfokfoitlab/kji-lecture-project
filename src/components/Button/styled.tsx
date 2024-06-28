import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ButtonProps } from "@/components/Button/index";
import { generateEmotionStyle } from "@/utils/emotion";
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
  ${({ fontSize }) => generateEmotionStyle("fontSize", fontSize, "px")};
  ${({ fontWeight }) => generateEmotionStyle("fontWeight", fontWeight)};
  ${({ backgroundColor }) =>
    generateEmotionStyle("backgroundColor", backgroundColor)};
  ${({ borderRadius }) =>
    generateEmotionStyle("borderRadius", borderRadius, "px")};
  ${({ textColor }) => generateEmotionStyle("color", textColor)};
  ${({ width }) => generateEmotionStyle("width", width, "px")};
  ${({ height }) => generateEmotionStyle("height", height, "px")};
  ${({ padding }) => generateEmotionStyle("padding", padding)};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}

  &:hover {
    box-shadow: none;
    ${({ backgroundColor, hoverBackgroundColor }) =>
      generateEmotionStyle(
        "backgroundColor",
        hoverBackgroundColor || backgroundColor,
      )};
  }
`;
