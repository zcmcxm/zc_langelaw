import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        "150": "40rem",
      },
      maxHeight: {
        "100": "26rem",
        "150": "40rem",
      },
      maxWidth: {
        "40-per": "40%",
        "80-per": "80%",
      },
      width: {
        "80-per": "80%",
      },
      height: {
        "120": "32rem",
      },
      fontSize: {
        xxs: [
          "0.65rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
      colors: {
        primary: "#8076a3",
        secondary: "#f5a623",
        accent: "#50e3c2",
      },
      keyframes: {
        drop: {
          "0%": { transform: "translateY(-20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "drop-fast": "drop 1.5s ease-out",
        "drop-slow": "drop 4s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
