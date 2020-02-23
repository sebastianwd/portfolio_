import React from 'react'

interface Props {
  children: React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  weight?: 'bold' | 'semibold' | 'regular' | 'light'
  variant?: 'primary' | 'secondary' | 'alternate'
  style?: React.CSSProperties
  size?: number
  other?: React.HTMLAttributes<HTMLParagraphElement>
}

const fontFamilies = {
  primary: 'Roboto',
  secondary: 'Poppins',
  alternate: 'Titillium Web',
}

const fontWeights = {
  bold: 700,
  semibold: 500,
  regular: 400,
  light: 300,
}

const Typography = (props: Props) => {
  const {
    children,
    as: Component = 'p',
    weight = 'regular',
    variant = 'primary',
    style,
    size,
    ...other
  } = props

  const textStyle: React.CSSProperties = {
    fontWeight: fontWeights[weight],
    fontFamily: fontFamilies[variant],
    ...(size && { fontSize: `${size / 5}em` }),
  }

  return (
    <Component style={{ ...textStyle, ...style }} {...other}>
      {children}
    </Component>
  )
}

export default Typography
