import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "@/components/Button/index";
import { generateEmotionStyle } from "@/utils/emotion";
import { Button } from "@mui/material";

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
    disabledBackgroundColor,
    disabledTextColor,
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
  ${({ width }) => {
    if (!width) {
      return;
    }

    if (typeof width === "number") {
      return css`
        width: ${width}px;
      `;
    }

    return css`
      width: ${width};
    `;
  }};

  &.Mui-disabled {
    ${({ disabledBackgroundColor }) =>
      generateEmotionStyle("backgroundColor", disabledBackgroundColor)};

    ${({ disabledTextColor }) =>
      generateEmotionStyle("color", disabledTextColor)};
  }
  ${({ width }) => generateEmotionStyle("minWidth", width, "px")};
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

  &.Mui-disabled {
    ${({ disabledBackgroundColor }) =>
      generateEmotionStyle("backgroundColor", disabledBackgroundColor)};
  }
`;
