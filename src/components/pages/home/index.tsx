import React from 'react'
import { Typograhy, WordSpinner } from '@components'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'
import { StyledComponent } from '@theme'
import { Link, Element } from 'react-scroll'

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

const HomePage = () => {
  return (
    <Container name="home">
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
        <Link to="about" smooth containerId="scroller">
          Go to second element inside container
        </Link>
      </Content>
    </Container>
  )
}

const Container = styled(Element)`
  max-width: ${rhythm(100)};
  margin: 0 auto;
  padding: 0 ${rhythm(5.5)};
  display: flex;
  height: 100%;
  align-items: center;
`

const Content = styled.div`
  margin-bottom: 18%;
`

const Tag = styled(Typograhy)<StyledComponent>`
  color: ${props => props.theme.textSecondary};
  display: block;
`

const Heading = styled(Typograhy)`
  margin-top: ${rhythm(0.3)};
`

export default HomePage
