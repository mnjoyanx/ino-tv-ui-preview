/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "white",
        black: "black",
        transparent: "transparent",
        primary: "#ee5c35",
        darkGray: "#1C1C1C",
        gray: "#646464",
        gray2: "#151515",
        grayLight: "#101011",
        darkBlue: "#060910",
        green: "#24FF00",
        grey: {
          1: "#101011",
          2: "#505050",
          3: "#1A1A1A",
        },
        blue: {
          1: "#11151F",
          2: "#09090A",
          3: "#121215",
          4: "#5F6978",
          link: "#3C58EE",
        },
        shade: {
          "dark-blue": "#10131A",
          "dark-blue-2": "#15171C",
          "darkest-blue": "#0B0B0D",
          grayis: "#161616",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
