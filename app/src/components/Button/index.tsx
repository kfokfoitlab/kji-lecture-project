import { StyledButton } from "@/components/Button/styled";
import { ButtonProps as MuiButtonProps, IconButtonProps } from "@mui/material";
import { StyledIconButton } from "@/components/Input/styled";

export type ButtonProps = MuiButtonProps & {
  textColor?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  padding?: string;
};

export default function Button({
  variant = "contained",
  fontSize = 16,
  fontWeight,
  textColor = "#fff",
  borderColor,
  backgroundColor = "#185ADB",
  borderRadius = 4,
  width,
  height = 48,
  ...args
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textColor={textColor}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      {...args}
    />
  );
}

export type IconButtonProp = Omit<IconButtonProps, "size"> & {
  size: number;
  iconColor?: string;
};

export function IconButton({ ...args }: IconButtonProp) {
  return <StyledIconButton {...args} />;
}
