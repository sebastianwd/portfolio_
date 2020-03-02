import React from 'react'
import { Typograhy, WordSpinner, WordAnimator } from '@components'
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
import { css } from '@emotion/core'

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
        <WordAnimator
          as="h1"
          size={11}
          css={heading}
          words="Hi, I am Sebastian Luque "
          delay={80}
        >
          <Tag
            as="span"
            size={5}
            variant="alternate"
            inline
            className="animated fadeIn"
            css={inlineTag}
          >
            {'</h1>'}
          </Tag>
        </WordAnimator>
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

const heading = css`
  margin-top: ${rhythm(0.3)};
  display: flex;
  transition: all 0.3s ease-out;
`

const inlineTag = css`
  font-size: ${rhythm(0.7)} !important;
  margin-left: ${rhythm(1)};
  align-self: flex-end;
  animation-delay: 2s;
`

const Container = styled.div`
  max-width: ${rhythm(70)};
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

export default HomePage
