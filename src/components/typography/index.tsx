import React from 'react'

interface Props {
  children: React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  weight: 'bold' | 'semibold' | 'regular' | 'light'
  style?: React.CSSProperties
  other?: any
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
    as: Variant = 'p',
    weight = 'regular',
    style,
    ...other
  } = props

  const textStyle: React.CSSProperties = {
    fontWeight: fontWeights[weight],
  }

  return (
    <Variant style={{ ...textStyle, ...style }} {...other}>
      {children}
    </Variant>
  )
}

export default Typography
