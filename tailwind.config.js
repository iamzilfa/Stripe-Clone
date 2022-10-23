/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sohne-var", "Helvetica Neue", "Arial", "sans-serif"]
      },
      colors: {
        buttonColor: "hsla(0,0%,100%,0.2)",
        grayTitle: "#0a2540",
        textColor: "#425466",
        blackButton: "#0A2540",
        light: "rgb(246, 249, 252)",
        blueNice: "rgb(91,99,225)",
        darkBlue: "#0A2540",
        lightBlue: "#00D4FF",
        lightPurple: "#7A73FF",
        grayPara: "#ADBDCC",
        grayFooter: "#f6f9fc",

      },
      translate: {
        "55%": "55%"
      },
      fontWeight: {
        normMed: "425"
      },
      fontSize: {
        '5xll': ['3.242rem', { lineHeight: '3.371rem' }],
        xms: ['0.938rem', { lineHeight: '1.5rem' }],
      },
      gridTemplateColumns:{
        20 : "112px 141px 58px 380x",
      },
      gridTemplateRows:{
        10: "107px 87px 125px 185px",
      }
    },
  },
  plugins: [],
}
