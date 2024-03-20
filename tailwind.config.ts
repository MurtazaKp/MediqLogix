import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "primary-heading": "82.24px",
        "secondary-heading": "36.9px",
        "tertiary-heading": "22.5px",
        "body-font": "16.5px",
        "secondary-body-font": "14.1px",
        "small-text": "12px",
        "warning-text": "10.2px",
      },
      lineHeight: {
        "primary-heading": "1.09",
        "secondary-heading": "1.08",
        "tertiary-heading": "1.32",
        "body-font": "1.5",
        "secondary-body-font": "1.42",
        "small-text": "1.25",
        "warning-text": "normal",
      },
      letterSpacing: {
        normal: "normal",
      },
      colors: {
        "primary-green": "#42ad25",
        "primary-blue": "#4387EA",
        "primary-black": "#333333",
        "secondary-black": "#000000",
        "secondary-gray": "#f2f2f2",
      },
    },
    plugins: [],
  },
};
export default config;
