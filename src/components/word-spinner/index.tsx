import React, { useState } from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { spacing } from '@theme'

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
        <Typograhy as="span" variant="secondary" size={5}>
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
  height: ${spacing(4)};
  margin: 0 6px;
`

const Container = styled.span`
  height: ${spacing(4.2)};
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
