import styled from "@emotion/styled";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckboxProps, LabelProps } from "@/components/Checkbox/index";
import { generateEmotionStyle } from "@/utils/emotion";
import { css } from "@emotion/react";

export const StyledLabel = styled(FormControlLabel)<LabelProps>`
  margin: 0;

  ${({ labelTextSize }) =>
    generateEmotionStyle("fontSize", labelTextSize, "px")};

  & .MuiTypography-root {
    font-size: 14px;
    margin-left: 6px;
  }
`;

export const StyledCheckbox = styled(
  ({ label, labelTextSize, checkboxSize, ...args }: CheckboxProps) => (
    <Checkbox {...args} />
  ),
)`
  ${({ checkboxSize }) =>
    checkboxSize &&
    css`
      &.MuiCheckbox-root {
        width: ${checkboxSize}px;
        height: ${checkboxSize}px;
      }

      & svg {
        width: ${checkboxSize + 4}px;
        height: ${checkboxSize + 4}px;
      }
    `}
  padding: 0;
`;
