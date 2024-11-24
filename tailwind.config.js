/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#F5F5F5",
        color2: "#E5E5E5",
        color3: "#FAFAFA",
      },

      backgroundImage: {
        "custom-gradient2":
          "linear-gradient(157.48deg, rgba(77, 77, 77, 0.045) 0%, rgba(140, 140, 140, 0.04) 99.6%)",
        "custom-gradient":
          "linear-gradient(126.89deg, #DB2777 -67.19%, #F97316 203.32%)",
        "custom-gradient3":
          "linear-gradient(126.89deg, rgba(219, 39, 119, 0.12) -67.19%, rgba(249, 115, 22, 0.12) 203.32%)",
        "custom-gradient4":
          "linear-gradient(126.89deg, #DB2777 -67.19%, #F97316 203.32%)",
      },
      boxShadow: {
        "custom-icon": "0px 4px 12px 0px #000000",
        "custom-top": "0px -2px 4px 0px #000000",
        "custom-bottom": "0px 2px 4px 0px #000000",
      },
    },
  },
  plugins: [],
};
