import React, { useState } from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'
import { keyframes } from '@emotion/core'

interface Item {
  value: string
  file: any
}

interface WordSpinnerProps {
  items: Array<Item>
}

const WordSpinner = (props: WordSpinnerProps) => {
  const { items } = props

  const [active, setActive] = useState(0)

  const { file, value } = items[active]

  const animateNext = () => {
    if (items.length - 1 < active + 1) {
      setActive(0)

      return
    }

    setActive(active + 1)
  }

  return (
    <Container>
      <Item onAnimationIteration={animateNext}>
        {file && <Icon src={file} alt="" />}
        <Typograhy as="span" variant="secondary" size={7}>
          {value}
        </Typograhy>
      </Item>
    </Container>
  )
}

const swipeUp = keyframes`
  0% {
    transform: translateY(-44px);
  }
  10% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(44px);
  }
 
`

const Icon = styled.img`
  height: ${rhythm(1.3)};
  margin: 0 6px;
`

const Container = styled.span`
  height: ${rhythm(1.4)};
  display: inline-flex;
  vertical-align: top;
  position: relative;
  overflow: hidden;
`

const Item = styled.span`
  display: flex;
  align-items: center;
  animation: ${swipeUp} 2s infinite ease-in-out;
`

export default WordSpinner
