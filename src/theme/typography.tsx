import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Roboto', 'Poppins', 'sans-serif', 'Helvetica', 'Arial'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '700'],
    },
    {
      name: 'Poppins',
      styles: ['400', '500'],
    },
    {
      name: 'La Belle Aurore',
      styles: [],
    },
  ],
})

const { rhythm, scale } = typography

export { rhythm, scale }

export default typography
