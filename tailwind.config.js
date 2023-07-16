/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        li: "linear-gradient(131deg, #000 0%, #000 10.40%, #0C0F24 25.00%, #000 66.32%, #080136 100%)",
        white: "#fff",
        blueviolet: {
          "100": "#454dfd",
          "200": "rgba(68, 46, 204, 0.7)",
          "300": "rgba(69, 77, 253, 0.55)",
        },
        darkslateblue: "#16214d",
        midnightblue: "#04063e",
        gray: {
          "100": "#232536",
          "200": "#22002b",
          "300": "#01032b",
          "400": "#08020f",
          "500": "rgba(255, 255, 255, 0.7)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        navy: "#080d76",
        dimgray: "#4c4444",
      },
      fontFamily: {
        "roboto-flex": "'Roboto Flex'",
        "roboto-mono": "'Roboto Mono'",
      },
      borderRadius: {
        "12xs": "1px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "2xl": "21px",
      lgi: "19px",
      base: "16px",
      xl: "20px",
      "12xl": "31px",
      lg: "18px",
      "5xl": "24px",
      mid: "17px",
      mini: "15px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

