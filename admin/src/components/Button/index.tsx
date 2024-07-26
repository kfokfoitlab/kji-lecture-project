import { StyledButton } from "@/components/Button/styled";
import { StyledIconButton } from "@/components/Input/styled";
import { theme } from "@/theme/theme";
import { ButtonProps as MuiButtonProps, IconButtonProps } from "@mui/material";

export type ButtonProps = MuiButtonProps & {
  textColor?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold" | number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  width?: number | string;
  height?: number;
  padding?: string;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
};

export default function Button({
  variant = "contained",
  fontSize = 14,
  fontWeight,
  textColor = "#fff",
  borderColor,
  backgroundColor = theme.colors.palette.blueBrandPrimary,
  borderRadius = 4,
  width,
  height = 48,
  onClick,
  ...args
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

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
      onClick={handleClick}
      {...args}
    />
  );
}

export type IconButtonProp = Omit<IconButtonProps, "size"> & {
  size: number;
  iconColor?: string;
  width?: number | string;
  height?: number;
};

export function IconButton({ ...args }: IconButtonProp) {
  return <StyledIconButton {...args} />;
}
