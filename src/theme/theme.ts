import "@emotion/react";

export const theme = {
  colors: {
    palette: {
      white: "#FFFFFF",
      gray100: "#F9F9F9",
      gray200: "#EEEEEE",
      gray300: "#E2E2E2",
      gray400: "#BDBDBD",
      gray500: "#8E8E8E",
      gray600: "#595959",
      gray700: "#4D4D4D",
      gray800: "#2C2C2C",

      blackTextPrimary: "#111111",

      blue100: "#F4FBFC",
      blue200: "#C5E7FF",
      blue300: "#C5EAFF",
      blue400: "#3B6DDC",
      blue500: "#0057FF",
      blue600: "#0075DA",
      blue700: "#0057B6",
      blue800: "#003E93",
      blue900: "#002C79",

      blueBrandPrimary: "#0098FE",

      orangePointPrimary: "#FE883C",
      orange100: "#FFDCC5",
      MainTextPoint: "#02C8C0",

      redDangerPrimary: "#FF002E",
      red100: "#FCE4E0",

      greenSuccessPrimary: "#1DC078",
      green100: "#E3FCE5",
    },
  },
} as const;

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
