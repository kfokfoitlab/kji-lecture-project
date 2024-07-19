import { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import { StyledCheckbox, StyledLabel } from "./styled";

export type CheckboxProps = MuiCheckboxProps &
  LabelProps & {
    checkboxSize?: number;
  };

export type LabelProps = {
  label?: string;
  labelTextSize?: number;
};

export default function Checkbox({
  label,
  labelTextSize = 14,
  checkboxSize = 24,
  ...args
}: CheckboxProps) {
  if (label) {
    return (
      <StyledLabel
        label={label}
        labelTextSize={labelTextSize}
        control={<StyledCheckbox checkboxSize={checkboxSize} {...args} />}
      />
    );
  }

  return <StyledCheckbox checkboxSize={checkboxSize} {...args} />;
}
