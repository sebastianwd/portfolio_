import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
  weight?: 'bold' | 'semibold' | 'regular' | 'light'
  variant?: 'primary' | 'secondary' | 'alternate'
  size?: number
  inline?: boolean
  color?: string
  [x: string]: any
}

const fontFamilies = {
  primary: 'Roboto',
  secondary: 'Poppins',
  alternate: 'La Belle Aurore',
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
    color,
    inline,
    ...other
  } = props

  const textStyle: React.CSSProperties = {
    fontWeight: fontWeights[weight],
    fontFamily: fontFamilies[variant],
    ...(size && { fontSize: `${size / 5}em` }),
    ...(inline && { display: 'inline-block' }),
    ...(color && { color }),
  }

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  return (
    <Component
      style={{ ...textStyle, ...style }}
      {...(Component === 'a' && linkProps)}
      {...other}
    >
      {children}
    </Component>
  )
}

export default Typography
