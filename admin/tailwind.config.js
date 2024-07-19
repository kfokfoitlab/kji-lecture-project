import plugin from "tailwindcss/plugin";
import { theme } from "./src/theme/theme";

const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    ...Object.entries(
      colors !== null && colors !== void 0 ? colors : {},
    ).flatMap(([color, values]) =>
      typeof values == "object"
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
          }))
        : [
            {
              [`${color}`]: values,
            },
          ],
    ),
  );

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      tb: { max: "1119px" },
      mb: { max: "767px" },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, addUtilities, theme: tailwindTheme }) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".absolute-center": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      });
      matchUtilities(
        {
          bs: (value) => {
            return {
              border: `1px solid ${value}`,
            };
          },
          bt: (value) => {
            return {
              "border-top": `1px solid ${value}`,
            };
          },
          bb: (value) => {
            return {
              "border-bottom": `1px solid ${value}`,
            };
          },
          bl: (value) => {
            return {
              "border-left": `1px solid ${value}`,
            };
          },
          br: (value) => {
            return {
              "border-right": `1px solid ${value}`,
            };
          },
          "svg-color": (value) => ({
            "* color": value,
          }),
        },
        { values: flattenColorPalette(theme.colors), type: "any" },
      );
    }),
  ],
};
