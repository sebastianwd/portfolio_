import React from 'react'
import styled from '@emotion/styled'
import { Nav } from '@components'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { children } = props

  return (
    <Wrapper id="scroller">
      <Container>{children}</Container>
      <Nav />
    </Wrapper>
  )
}

const Container = styled.div`
  grid-area: main;
  min-height: 100%;
`

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  grid-template-areas:
    'main nav'
    'main nav'
    'main nav';
  grid-template-columns: 1fr auto;
`

export default DefaultLayout
