import React from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { rhythm } from '@theme/typography'
import { Theme } from '@theme'
import Checkbox from '@components/checkbox'

const ProjectsPage = () => {
  const theme: Theme = useTheme()

  return (
    <Container id="projects">
      <LeftContent>
        <Typograhy as="h2" weight="bold" color={theme.primary} size={13}>
          Work /&gt;
        </Typograhy>
        <Checkbox id="sadas" />

        <Checkbox id="wqe" />
        <Checkbox id="fsd" />
        <Checkbox id="sdf" />
      </LeftContent>
      <RightContent>asd</RightContent>
    </Container>
  )
}

const Container = styled.div`
  max-width: ${rhythm(100)};
  margin: 0 auto;
  padding: 0 ${rhythm(5.5)};
  display: flex;
  min-height: 100%;
`

const LeftContent = styled.div`
  margin-top: 8%;
  flex-basis: 50%;
`

const RightContent = styled.div`
  margin-bottom: 16%;
  width: 36%;
  position: relative;
  align-items: center;
  justify-content: center;
`

export default ProjectsPage
