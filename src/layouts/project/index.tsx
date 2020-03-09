import React from 'react'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

const ProjectLayout = (props: Props) => {
  const { children } = props

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

const Container = styled.div`
  grid-area: main;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  overflow: hidden;
`

export default ProjectLayout
