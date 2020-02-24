import React from 'react'
import { SEO, Typograhy, WordSpinner } from '@components'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'
import { StyledComponent } from '@theme'

interface Tag extends StyledComponent {
  inline?: boolean
}

const brands = [
  {
    value: 'React',
    filename: 'react-icon.svg',
  },
  {
    value: 'GraphQL',
    filename: 'graphql-icon.svg',
  },
  {
    value: 'React Native',
    filename: 'react-native-icon.svg',
  },
  {
    value: 'NodeJS',
    filename: 'nodejs-icon.svg',
  },
  {
    value: 'Microsoft .NET',
    filename: 'net-icon.svg',
  },
  {
    value: 'SQL',
    filename: 'sql-icon.svg',
  },
]

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Container>
        <Content>
          <Tag
            as="span"
            style={{ transform: 'translate(-50px,-50px)' }}
            size={5}
            variant="alternate"
          >
            {'<body>'}
          </Tag>
          <Tag as="span" size={5} variant="alternate">
            {'<h1>'}
          </Tag>
          <Heading as="h1" size={11} inline>
            Hi, I am Sebastian Luque{' '}
            <Tag
              as="span"
              size={5}
              variant="alternate"
              inline
              style={{ fontSize: 20, marginLeft: 30 }}
            >
              {'</h1>'}
            </Tag>
          </Heading>
          <Typograhy as="p">
            <Typograhy as="span" weight="light" size={7}>
              Full stack web and mobile developer specialized in JavaScript
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

const Tag = styled(Typograhy)<Tag>`
  color: ${props => props.theme.textSecondary};
  display: block;
`

const Heading = styled(Typograhy)`
  margin-top: ${rhythm(0.3)};
`

export default IndexPage
