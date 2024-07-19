import { ChipProps as MuiChipProps, Chip as MuiChip } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export type ChipProps = MuiChipProps & {
  backgroundColor?: string;
  borderColor?: string;
  activeBackgroundColor?: string;
  activeBorderColor?: string;
  active?: boolean;
  textColor?: string;
  activeTextColor?: string;
};

export default function Chip({
  backgroundColor = "#eef3f6",
  activeBackgroundColor = "#185adb",
  textColor = "#acacac",
  activeTextColor = "#fff",
  activeBorderColor,
  borderColor,
  active,
  onClick,
  ...args
}: ChipProps) {
  return (
    <StyledChip
      backgroundColor={backgroundColor}
      activeBackgroundColor={activeBackgroundColor}
      textColor={textColor}
      activeTextColor={activeTextColor}
      activeBorderColor={activeBorderColor}
      borderColor={borderColor}
      active={active}
      onClick={onClick}
      {...args}
    />
  );
}

const StyledChip = styled(
  ({
    backgroundColor,
    activeBackgroundColor,
    borderColor,
    activeBorderColor,
    active,
    textColor,
    activeTextColor,
    ...args
  }: ChipProps) => <MuiChip {...args} />,
)`
  ${({ backgroundColor, color, borderColor }) => css`
    background-color: ${backgroundColor};

    &:hover {
      background-color: ${backgroundColor};
    }

    > span {
      color: ${color};
    }

    ${borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}
  `}

  ${({ active, activeBackgroundColor, activeBorderColor, activeTextColor }) =>
    active &&
    css`
      background-color: ${activeBackgroundColor};

      > span {
        color: ${activeTextColor};
      }

      &:hover {
        background-color: ${activeBackgroundColor};
      }

      ${activeBorderColor &&
      css`
        border: 1px solid ${activeBorderColor};
      `}
    `}
`;
