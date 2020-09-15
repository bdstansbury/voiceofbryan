import Typography from "typography"
import twinPeaksTheme from "typography-theme-twin-peaks"


twinPeaksTheme.overrideStyles = () => ({
    a: {
      color: "#2A8A9D", textDecoration: "none"
    },
    "h1,h2,h3,h4,h5,h6": { color: "white" },
  })

const bryansTheme = Object.assign({}, twinPeaksTheme, {
    baseFontSize: '21px', a: {
          color: "blue",
        }, 
      

});

const typography = new Typography(bryansTheme)

export const { scale, rhythm, options } = typography
export default typography