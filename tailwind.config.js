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
        grayHover: "hsla(0,0%,100%,0.4),",
        textHover :"#142541",
        violet: "#a960ee",
        darkRed: "#ff333d",
        aquamarine: "#90e0ff"
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
        30: "323px 501px 256px",
      },
      gridTemplateRows:{
        10: "107px 87px 125px 185px",
        20: "86px 201px 126px 425px"
      },
      boxShadow:{
        cardShadowXSmall:" 0 2px 5px -1px rgba(50,50,93,0.25),0 1px 3px -1px rgba(0,0,0,0.3)",
        cardShadowSmall: "0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3)",
        cardShadowMedium: "0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)",
        cardShadowLarge: "0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)",
        cardShadowLargeInset: "inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3)",
        cardShadowXLarge: "0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)",
        cardShadowXSMallMargin: "2px",
        cardShadowSmallMargin: "8px",
        cardShadowMediumMargin: '16px',
        cardShadowLargeMargin: "32px",
        cardShadowXLargeMargin: "48px",
      },
      backgroundImage:{
        'globalImage' :"url('/img/globe.png')"
      }
    },
  },
  plugins: [],
}
