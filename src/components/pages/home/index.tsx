import React from 'react'
import { Typograhy, WordSpinner } from '@components'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'
import { StyledComponent } from '@theme'
import { Link } from 'gatsby'
import reactIcon from '@images/react-icon.svg'
import graphqlIcon from '@images/graphql-icon.svg'
import reactNativeIcon from '@images/react-native-icon.svg'
import nodejsIcon from '@images/nodejs-icon.svg'
import netIcon from '@images/net-icon.svg'
import sqlIcon from '@images/sql-icon.svg'

const brands = [
  {
    value: 'React',
    file: reactIcon,
  },
  {
    value: 'GraphQL',
    file: graphqlIcon,
  },
  {
    value: 'React Native',
    file: reactNativeIcon,
  },
  {
    value: 'NodeJS',
    file: nodejsIcon,
  },
  {
    value: 'Microsoft .NET',
    file: netIcon,
  },
  {
    value: 'SQL',
    file: sqlIcon,
  },
]

const HomePage = () => {
  return (
    <Container id="home">
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
        <Link to="/project/ghostfm/">
          Go to second element inside container
        </Link>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: ${rhythm(90)};
  margin: 0 auto;
  padding: 0 ${rhythm(5.5)};
  display: flex;
  min-height: 100%;
  align-items: center;
  flex-grow: 1;
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
