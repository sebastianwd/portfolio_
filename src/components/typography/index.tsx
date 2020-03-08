import React from 'react'
import { InterpolationWithTheme } from '@emotion/core'
import { Theme } from '@theme'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a' | 'label'
  weight?: 'bold' | 'semibold' | 'regular' | 'light'
  variant?: 'primary' | 'secondary' | 'alternate'
  size?: number
  inline?: boolean
  color?: string
  [x: string]: any
}

const fontFamilies = {
  primary: 'Inter',
  secondary: 'Poppins',
  alternate: 'La Belle Aurore',
}

const fontWeights = {
  bold: 700,
  semibold: 500,
  regular: 400,
  light: 300,
}

const Typography = (props: TypographyProps) => {
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

  const textStyle: InterpolationWithTheme<Theme> = {
    fontWeight: fontWeights[weight],
    fontFamily: fontFamilies[variant],
    ...(size && { fontSize: `${(size * 0.4).toFixed(2)}rem` }),
    ...(inline && { display: 'inline-block' }),
    ...(color && { color }),
  }

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  return (
    <Component
      style={{ ...style }}
      css={textStyle}
      {...(Component === 'a' && linkProps)}
      {...other}
    >
      {children}
    </Component>
  )
}

export default Typography
