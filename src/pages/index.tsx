import React from 'react'
import { SEO, Typograhy, WordSpinner } from '@components'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'

const brands = [
  {
    value: 'React',
    filename: 'react-icon.svg',
  },
]

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Container>
        <Content>
          <Typograhy as="h1" size={11}>
            Hi, I am Sebastian Luque
          </Typograhy>
          <Typograhy as="p">
            <Typograhy as="span" weight="light" size={7}>
              Full stack web developer specialized in JavaScript
              <br />
              with experience working with technologies like{' '}
            </Typograhy>
            <WordSpinner items={brands} />
          </Typograhy>
        </Content>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 0 ${rhythm(5.5)};
  display: flex;
  align-items: center;
  height: 100%;
`

const Content = styled.div`
  margin-bottom: 18%;
`

export default IndexPage
