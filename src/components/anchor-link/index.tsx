import React from 'react'
import { Typograhy } from '@components'
import { gsap } from 'gsap'
import { StyledComponent } from '@theme'

interface Props extends StyledComponent {
  to: string
}

const AnchorLink: React.FC<Props> = props => {
  const { children, style, to, ...other } = props

  const handleClick = () => {
    gsap.to('#scroller', {
      duration: 1,
      scrollTo: { y: to, offsetY: 70 },
      ease: 'expo',
    })
  }

  return (
    <Typograhy as="a" style={style} onClick={handleClick} {...other}>
      {children}
    </Typograhy>
  )
}

export default AnchorLink
