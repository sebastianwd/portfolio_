import React from 'react'
import { Typograhy, WordSpinner, WordAnimator } from '@components'
import styled from '@emotion/styled'
import { StyledComponent, spacing, bp } from '@theme'
import reactIcon from '@images/react-icon.svg'
import graphqlIcon from '@images/graphql-icon.svg'
import reactNativeIcon from '@images/react-native-icon.svg'
import nodejsIcon from '@images/nodejs-icon.svg'
import netIcon from '@images/net-icon.svg'
import sqlIcon from '@images/sql-icon.svg'
import siteLogo from '@images/site-logo.png'
import { css } from '@emotion/core'
import { ParticleCanvas } from './components'

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
    <Section>
      <Container>
        <Row>
          <LeftContent>
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
              size={10}
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
              <Typograhy as="span" weight="light" size={5.5}>
                Full stack web and mobile developer specialized in JavaScript
                with experience working with technologies like{' '}
              </Typograhy>
              <WordSpinner items={brands} />
            </Typograhy>
          </LeftContent>
          <RightContent>
            <ParticleCanvas src={siteLogo} />
          </RightContent>
        </Row>
      </Container>
    </Section>
  )
}

const heading = css`
  margin-top: ${spacing(1)};
  display: flex;
  transition: all 0.3s ease-out;
`

const inlineTag = css`
  font-size: ${spacing(2)} !important;
  margin-left: ${spacing(3)};
  align-self: flex-end;
  animation-delay: 2s;
`

const Row = styled.div`
  min-height: 100%;
  align-items: center;
  flex-grow: 1;
  display: inline-flex;
  margin: 0 auto;

  ${bp.to('sm')} {
    flex-direction: column;
  }
`

const RightContent = styled.div`
  flex-basis: 40%;
`

const LeftContent = styled.div``

const Container = styled.div`
  max-width: ${spacing(118)};
  padding-left: 45px;
  padding-right: 45px;
`

const Section = styled.section`
  padding: ${spacing(6)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Tag = styled(Typograhy)<StyledComponent>`
  color: ${props => props.theme.textSecondary};
  display: block;
`

export default HomePage
