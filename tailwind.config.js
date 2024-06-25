/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { max: "1119px" },
      // => @media (max-width: 1119px) { ... }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        b: (value) => ({
          border: `1px solid ${value}`,
        }),
        bt: (value) => ({
          "border-top": `1px solid ${value}`,
        }),
        bb: (value) => ({
          "border-bottom": `1px solid ${value}`,
        }),
        bl: (value) => ({
          "border-left": `1px solid ${value}`,
        }),
        br: (value) => ({
          "border-right": `1px solid ${value}`,
        }),
        "svg-color": (value) => ({
          "* color": value,
        }),
      });
    }),
  ],
};
